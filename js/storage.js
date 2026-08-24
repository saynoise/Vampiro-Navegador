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
      const defaultChar = createBlankCharacter('Julian Lucian');
      defaultChar.header.clan = 'Ventrue';
      defaultChar.header.generation = '8ª';
      defaultChar.header.concept = 'Aristocrata Noturno';
      defaultChar.attributes.physical.strength = 4;
      defaultChar.attributes.physical.dexterity = 4;
      defaultChar.attributes.social.charisma = 4;
      defaultChar.attributes.mental.wits = 3;
      defaultChar.virtues.conscience = 3;
      defaultChar.virtues.self_control = 4;
      defaultChar.virtues.courage = 3;
      defaultChar.status.humanity = 7;
      defaultChar.status.willpower_perm = 7;
      defaultChar.disciplines = [
        { id: generateUniqueId(), name: 'Vicissitude', level: 7 },
        { id: generateUniqueId(), name: 'Gargoyle Flight', level: 4 },
        { id: generateUniqueId(), name: 'Koldunic Sorcery', level: 6 },
        { id: generateUniqueId(), name: 'Fortitude', level: 4 },
        { id: generateUniqueId(), name: 'Auspex', level: 5 },
        { id: generateUniqueId(), name: 'Thaumaturgy', level: 3 }
      ];
      defaultChar.specializations = [
        { id: generateUniqueId(), name: 'Ex: Força: Empurrão, Snip', level: 1 },
        { id: generateUniqueId(), name: 'Ex: Força: Empurrão, Snip', level: 1 },
        { id: generateUniqueId(), name: 'Ex: Força: Empurrão, Snip', level: 1 },
        { id: generateUniqueId(), name: 'Ex: Força: Empurrão, Snip', level: 1 },
        { id: generateUniqueId(), name: 'Ex: Força: Empurrão, Snip', level: 1 }
      ];
      defaultChar.backgrounds = [
        { id: generateUniqueId(), name: 'Recursos', level: 4 }
      ];
      defaultChar.paths = [
        { id: generateUniqueId(), name: 'Trilha do Sangue (Primária)', level: 3 }
      ];
      defaultChar.rituals_list = [
        { id: generateUniqueId(), level: 1, name: 'Defesa do Refúgio Sagrado', description: 'Protege o refúgio do vampiro contra a luz solar.' }
      ];
      defaultChar.notes.weakness = 'Fraqueza do Clã ou pessoal...';
      defaultChar.notes.merits_flaws = 'Sentidos Aguçados (+1pt): Reduz a dificuldade de percepção em 2.\nInimigo do Clã (-2pts): Desavença com um ancião rival.';
      defaultChar.notes.other_traits = 'Refúgio: Cobertura blindada no centro da cidade.\nIdiomas: Latim, Inglês, Francês e Alemão.';
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
        if (!Array.isArray(c.specializations)) c.specializations = [];
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
        if (c.abilities && c.abilities.talents) {
          if (c.abilities.talents.foresight === undefined && c.abilities.talents.dodge !== undefined) {
            c.abilities.talents.foresight = c.abilities.talents.dodge;
          }
        }
        if (c.abilities && c.abilities.skills) {
          if (c.abilities.skills.larceny === undefined && c.abilities.skills.security !== undefined) {
            c.abilities.skills.larceny = c.abilities.skills.security;
          }
        }
      });

      // Garante a reconexão imediata do activeCharacter à instância correspondente na lista
      if (this.characters.length > 0) {
        const targetId = (this.activeCharacter && this.activeCharacter.id) || localStorage.getItem(ACTIVE_CHAR_KEY);
        const found = this.characters.find(c => c.id === targetId);
        this.activeCharacter = found || this.characters[0];
        syncBloodPoolWithGeneration(this.activeCharacter);
      }
    } catch (e) {
      console.error('Erro ao ler do LocalStorage:', e);
      this.characters = [];
    }
  },

  saveToStorage() {
    try {
      // Sincroniza o activeCharacter na lista de personagens antes de serializar
      if (this.activeCharacter && Array.isArray(this.characters)) {
        const idx = this.characters.findIndex(c => c.id === this.activeCharacter.id);
        if (idx !== -1) {
          this.characters[idx] = this.activeCharacter;
        } else {
          this.characters.push(this.activeCharacter);
        }
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.characters));
      if (this.activeCharacter) {
        localStorage.setItem(ACTIVE_CHAR_KEY, this.activeCharacter.id);
      }
    } catch (e) {
      console.error('Erro ao salvar no LocalStorage:', e);
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        showToast('⚠️ Limite de armazenamento do navegador atingido! Remova ou reduza fotos grandes.', 'danger');
      } else {
        showToast('⚠️ Falha ao salvar no armazenamento local.', 'danger');
      }
    }
  },

  setActive(id) {
    const char = this.characters.find(c => c.id === id);
    if (char) {
      this.activeCharacter = char;
      syncBloodPoolWithGeneration(this.activeCharacter);
      localStorage.setItem(ACTIVE_CHAR_KEY, id);
      LinkCableSystem.clear();
      ThemeManager.loadForActiveCharacter();
      if (typeof DiceHistoryManager !== 'undefined') {
        DiceHistoryManager.updateBadgeCount();
      }
      return true;
    }
    return false;
  },

  addCharacter(newChar) {
    syncBloodPoolWithGeneration(newChar);
    this.characters.push(newChar);
    this.activeCharacter = newChar;
    this.saveToStorage();
    LinkCableSystem.clear();
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
    syncBloodPoolWithGeneration(cloned);
    this.characters.push(cloned);
    this.activeCharacter = cloned;
    this.saveToStorage();
    LinkCableSystem.clear();
    return cloned;
  },

  deleteActive() {
    if (this.characters.length <= 1) {
      const blank = createBlankCharacter('Novo Personagem');
      this.characters = [blank];
      this.activeCharacter = blank;
    } else {
      const currentId = this.activeCharacter.id;
      this.characters = this.characters.filter(c => c.id !== currentId);
      this.activeCharacter = this.characters[0];
    }
    syncBloodPoolWithGeneration(this.activeCharacter);
    this.saveToStorage();
    LinkCableSystem.clear();
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

// =============================================================================