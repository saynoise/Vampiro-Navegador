/**
 * FICHA DE PERSONAGEM V20 - ARMAZENAMENTO E PERSISTÊNCIA
 * AppState, LocalStorage, Compressor de Fotos e Upload
 */

'use strict';

const AppState = {
  characters: [],
  activeCharacter: null,

  init() {
    this.loadFromStorage();
    if (this.characters.length === 0) {
      const defaultChar = createBlankCharacter('Novo Personagem');
      syncBloodPoolWithGeneration(defaultChar);
      this.characters.push(defaultChar);
      this.activeCharacter = defaultChar;
      this.saveToStorage();
    } else {
      const savedActiveId = localStorage.getItem(ACTIVE_CHAR_KEY);
      const found = this.characters.find(c => c.id === savedActiveId);
      this.activeCharacter = found || this.characters[0];
      syncBloodPoolWithGeneration(this.activeCharacter);
    }
  },

  loadFromStorage() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      this.characters = data ? JSON.parse(data) : [];
      this.characters.forEach(c => {
        if (!Array.isArray(c.disciplines)) c.disciplines = [];
        if (!Array.isArray(c.specializations)) c.specializations = [];
        if (!Array.isArray(c.backgrounds)) c.backgrounds = [];
        if (!Array.isArray(c.paths)) c.paths = [];
        if (!Array.isArray(c.rituals_list)) c.rituals_list = [];
        if (!c.notes) c.notes = {};
        if (!c.theme) {
          c.theme = {
            preset: 'red',
            primaryHue: 0,
            primarySat: 100,
            secondaryHue: 40,
            secondarySat: 65,
            bgLightness: 8,
            noiseOpacity: 7
          };
        }
        if (!c.settings) {
          c.settings = {
            discordWebhook: '',
            discordEmotes: {
              critico: '<:critico:1540580738007695512>',
              sucesso: '<:sucesso:1540580820127842344>',
              falha: '<:falha:1540580800456691773>',
              falhacritica: '<:falhacritica:1540580772652523600>'
            }
          };
        }
        if (!Array.isArray(c.roll_history)) {
          c.roll_history = [];
        }
      });
    } catch (e) {
      console.error('Erro ao ler LocalStorage:', e);
      this.characters = [];
    }
  },

  saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.characters));
      if (this.activeCharacter) {
        localStorage.setItem(ACTIVE_CHAR_KEY, this.activeCharacter.id);
      }
    } catch (e) {
      console.error('Erro ao salvar no LocalStorage:', e);
      showToast('Erro ao salvar ficha: armazenamento cheio ou bloqueado.', 'danger');
    }
  },

  getActive() {
    return this.activeCharacter;
  },

  setActive(id) {
    const found = this.characters.find(c => c.id === id);
    if (found) {
      this.activeCharacter = found;
      syncBloodPoolWithGeneration(this.activeCharacter);
      localStorage.setItem(ACTIVE_CHAR_KEY, this.activeCharacter.id);
      if (typeof LinkCableSystem !== 'undefined') LinkCableSystem.clear();
      if (typeof ThemeManager !== 'undefined') ThemeManager.loadForActiveCharacter();
      if (typeof DiceHistoryManager !== 'undefined') DiceHistoryManager.updateBadgeCount();
      return true;
    }
    return false;
  },

  createCharacter(name) {
    const newChar = createBlankCharacter(name || 'Novo Personagem');
    syncBloodPoolWithGeneration(newChar);
    this.characters.push(newChar);
    this.setActive(newChar.id);
    this.saveToStorage();
    if (typeof LinkCableSystem !== 'undefined') LinkCableSystem.clear();
    return newChar;
  },

  addCharacter(newChar) {
    syncBloodPoolWithGeneration(newChar);
    this.characters.push(newChar);
    this.setActive(newChar.id);
    this.saveToStorage();
    if (typeof LinkCableSystem !== 'undefined') LinkCableSystem.clear();
  },

  duplicateActive() {
    if (!this.activeCharacter) return null;
    const cloned = JSON.parse(JSON.stringify(this.activeCharacter));
    cloned.id = generateUniqueId();
    cloned.header.name = (cloned.header.name || 'Personagem') + ' (Cópia)';
    if (Array.isArray(cloned.disciplines)) cloned.disciplines.forEach(d => d.id = generateUniqueId());
    if (Array.isArray(cloned.specializations)) cloned.specializations.forEach(s => s.id = generateUniqueId());
    if (Array.isArray(cloned.backgrounds)) cloned.backgrounds.forEach(b => b.id = generateUniqueId());
    if (Array.isArray(cloned.paths)) cloned.paths.forEach(p => p.id = generateUniqueId());
    if (Array.isArray(cloned.rituals_list)) cloned.rituals_list.forEach(r => r.id = generateUniqueId());
    cloned.roll_history = [];
    
    syncBloodPoolWithGeneration(cloned);
    this.characters.push(cloned);
    this.setActive(cloned.id);
    this.saveToStorage();
    if (typeof LinkCableSystem !== 'undefined') LinkCableSystem.clear();
    return cloned;
  },

  duplicateCharacter(id) {
    return this.duplicateActive();
  },

  deleteActive() {
    if (this.characters.length <= 1) {
      const blank = createBlankCharacter('Novo Personagem');
      this.characters = [blank];
      this.activeCharacter = blank;
      this.saveToStorage();
      if (typeof LinkCableSystem !== 'undefined') LinkCableSystem.clear();
      showToast('Ficha restaurada para o padrão.', 'info');
      return true;
    }

    const idx = this.characters.findIndex(c => c.id === this.activeCharacter.id);
    if (idx !== -1) {
      this.characters.splice(idx, 1);
      this.activeCharacter = this.characters[0];
      syncBloodPoolWithGeneration(this.activeCharacter);
      this.saveToStorage();
      if (typeof LinkCableSystem !== 'undefined') LinkCableSystem.clear();
      return true;
    }
    return false;
  },

  deleteCharacter(id) {
    if (this.activeCharacter && this.activeCharacter.id === id) {
      return this.deleteActive();
    }
    const idx = this.characters.findIndex(c => c.id === id);
    if (idx !== -1) {
      this.characters.splice(idx, 1);
      this.saveToStorage();
      return true;
    }
    return false;
  },

  updateField(path, value) {
    if (!this.activeCharacter) return;
    setNestedValue(this.activeCharacter, path, value);
    this.saveToStorage();
  }
};

function compressImage(file, maxWidth = 400, maxHeight = 400, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (event) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function dataURItoBlob(dataURI) {
  try {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  } catch (e) {
    console.error('Erro ao converter dataURI para Blob:', e);
    return new Blob([], { type: 'image/png' });
  }
}

async function uploadImageToHost(fileOrBlob) {
  try {
    const formData = new FormData();
    formData.append('image', fileOrBlob);
    const res = await fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: {
        Authorization: 'Client-ID 546c25a59c58ad7'
      },
      body: formData
    });
    const data = await res.json();
    if (data && data.success && data.data && data.data.link) {
      return data.data.link;
    }
  } catch (e) {
    console.warn('Falha no upload para o Imgur:', e);
  }
  return null;
}
