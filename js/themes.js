/**
 * FICHA DE PERSONAGEM V20 - GERENCIADOR DE TEMAS E CORES
 * Presets dos 7 Clãs, Cores Clássicas e Personalização de Paletas
 */

'use strict';

const THEME_CUSTOMIZATION_KEY = 'v20_theme_customizations';

const THEME_PRESETS = {
  // Temas de Clãs
  clan_ventrue: {
    name: '👑 Ventrue (Sangue Azul & Ouro Nobre)',
    primaryHue: 218,
    primarySat: 92,
    secondaryHue: 46,
    secondarySat: 95,
    bgLightness: 7,
    noiseOpacity: 7
  },
  clan_tremere: {
    name: '🩸 Tremere (Carmesim & Ouro Arcano)',
    primaryHue: 358,
    primarySat: 100,
    secondaryHue: 32,
    secondarySat: 85,
    bgLightness: 6,
    noiseOpacity: 7
  },
  clan_toreador: {
    name: '🌹 Toreador (Rosa das Paixões & Ouro Rosé)',
    primaryHue: 330,
    primarySat: 95,
    secondaryHue: 15,
    secondarySat: 85,
    bgLightness: 8,
    noiseOpacity: 7
  },
  clan_brujah: {
    name: '🔥 Brujah (Fogo Revolucionário & Aço)',
    primaryHue: 16,
    primarySat: 100,
    secondaryHue: 210,
    secondarySat: 25,
    bgLightness: 8,
    noiseOpacity: 7
  },
  clan_lasombra: {
    name: '🌑 Lasombra (Escuridão Abissal & Prata)',
    primaryHue: 235,
    primarySat: 90,
    secondaryHue: 215,
    secondarySat: 20,
    bgLightness: 5,
    noiseOpacity: 9
  },
  clan_tzimisce: {
    name: '🐉 Tzimisce (Esmeralda & Ouro Ancestral)',
    primaryHue: 155,
    primarySat: 85,
    secondaryHue: 38,
    secondarySat: 80,
    bgLightness: 6,
    noiseOpacity: 8
  },
  clan_giovanni: {
    name: '⚰️ Giovanni (Púrpura & Ouro Veneziano)',
    primaryHue: 280,
    primarySat: 85,
    secondaryHue: 46,
    secondarySat: 88,
    bgLightness: 6,
    noiseOpacity: 8
  },

  // Cores Clássicas
  red: {
    name: '🔴 Vermelho (Carmesim Padrão)',
    primaryHue: 0,
    primarySat: 100,
    secondaryHue: 40,
    secondarySat: 65,
    bgLightness: 8,
    noiseOpacity: 7
  },
  green: {
    name: '🟢 Verde (Esmeralda)',
    primaryHue: 142,
    primarySat: 80,
    secondaryHue: 85,
    secondarySat: 70,
    bgLightness: 7,
    noiseOpacity: 7
  },
  purple: {
    name: '🟣 Roxo (Abissal)',
    primaryHue: 275,
    primarySat: 85,
    secondaryHue: 310,
    secondarySat: 65,
    bgLightness: 7,
    noiseOpacity: 7
  },
  yellow: {
    name: '🟡 Amarelo (Âmbar)',
    primaryHue: 42,
    primarySat: 95,
    secondaryHue: 48,
    secondarySat: 85,
    bgLightness: 8,
    noiseOpacity: 7
  }
};

const ThemeManager = {
  currentTheme: {
    preset: 'red',
    primaryHue: 0,
    primarySat: 100,
    secondaryHue: 40,
    secondarySat: 65,
    bgLightness: 8,
    noiseOpacity: 7
  },

  init() {
    this.loadForActiveCharacter();
  },

  loadForActiveCharacter() {
    if (AppState.activeCharacter && AppState.activeCharacter.theme) {
      this.currentTheme = { ...AppState.activeCharacter.theme };
    } else {
      const saved = localStorage.getItem(THEME_CUSTOMIZATION_KEY);
      if (saved) {
        try {
          this.currentTheme = { ...this.currentTheme, ...JSON.parse(saved) };
        } catch (e) {
          console.error('Erro ao carregar tema:', e);
        }
      } else {
        this.currentTheme = { ...THEME_PRESETS.red };
      }
    }
    this.applyTheme(this.currentTheme);
    this.updateControlsUI();
  },

  applyTheme(theme) {
    const root = document.documentElement;
    document.body.setAttribute('data-clan-theme', theme.preset || 'custom');

    const cssVarsToManage = [
      '--crimson-base', '--crimson-dark', '--crimson-bright', '--crimson-glow', '--crimson-cable',
      '--gold-base', '--gold-dark', '--gold-bright', '--gold-glow', '--border-accent',
      '--bg-app', '--bg-sheet', '--bg-card', '--bg-card-alt', '--bg-input', '--noise-opacity'
    ];

    // Se o tema for o Vermelho Padrão oficial, remove todos os overrides inline para usar o CSS original exato
    if (theme.preset === 'red') {
      cssVarsToManage.forEach(v => root.style.removeProperty(v));

      const previewPri = document.getElementById('preview-primary');
      if (previewPri) previewPri.style.background = '#ff1a1a';

      const previewSec = document.getElementById('preview-secondary');
      if (previewSec) previewSec.style.background = '#e5c158';

      const previewBg = document.getElementById('preview-bg');
      if (previewBg) previewBg.style.background = '#1a1a23';
      return;
    }

    const pHue = parseInt(theme.primaryHue, 10) || 0;
    const pSat = parseInt(theme.primarySat, 10) || 100;
    const sHue = parseInt(theme.secondaryHue, 10) || 40;
    const sSat = parseInt(theme.secondarySat, 10) || 65;
    const bgL = parseInt(theme.bgLightness, 10) || 8;
    const noise = parseInt(theme.noiseOpacity, 10) || 7;

    // Destaque Primário (Bolinhas / Sangue / Cabos)
    root.style.setProperty('--crimson-base', `hsl(${pHue}, ${pSat}%, 30%)`);
    root.style.setProperty('--crimson-dark', `hsl(${pHue}, ${pSat}%, 18%)`);
    root.style.setProperty('--crimson-bright', `hsl(${pHue}, ${pSat}%, 55%)`);
    root.style.setProperty('--crimson-glow', `hsla(${pHue}, ${pSat}%, 55%, 0.55)`);
    root.style.setProperty('--crimson-cable', `hsl(${pHue}, ${pSat}%, 58%)`);

    // Destaque Secundário (Títulos / Bordas / Ankh)
    root.style.setProperty('--gold-base', `hsl(${sHue}, ${sSat}%, 55%)`);
    root.style.setProperty('--gold-dark', `hsl(${sHue}, ${sSat}%, 35%)`);
    root.style.setProperty('--gold-bright', `hsl(${sHue}, ${sSat}%, 65%)`);
    root.style.setProperty('--gold-glow', `hsla(${sHue}, ${sSat}%, 65%, 0.35)`);
    root.style.setProperty('--border-accent', `hsl(${sHue}, ${sSat}%, 25%)`);

    // Blocos Centrais e Cards da Ficha (Cinza Carvão Neutro / Gótico)
    root.style.setProperty('--bg-sheet', `hsl(240, 2%, ${bgL + 4}%)`);
    root.style.setProperty('--bg-card', `hsl(240, 3%, ${bgL + 6}%)`);
    root.style.setProperty('--bg-card-alt', `hsl(240, 3%, ${bgL + 5}%)`);
    root.style.setProperty('--bg-input', `hsl(240, 2%, ${bgL + 2}%)`);
    root.style.setProperty('--border-subtle', `hsl(240, 4%, ${bgL + 12}%)`);

    // Opacidade do Ruído
    root.style.setProperty('--noise-opacity', `${noise / 100}`);

    // Atualiza caixas de preview
    const previewPri = document.getElementById('preview-primary');
    if (previewPri) previewPri.style.background = `hsl(${pHue}, ${pSat}%, 55%)`;

    const previewSec = document.getElementById('preview-secondary');
    if (previewSec) previewSec.style.background = `hsl(${sHue}, ${sSat}%, 65%)`;

    const previewBg = document.getElementById('preview-bg');
    if (previewBg) previewBg.style.background = `hsl(240, 5%, ${bgL + 7}%)`;

    if (typeof LinkCableSystem !== 'undefined' && LinkCableSystem.drawCables) {
      LinkCableSystem.drawCables();
    }
  },

  applyPreset(presetKey) {
    if (!THEME_PRESETS[presetKey]) return;
    const preset = THEME_PRESETS[presetKey];
    this.currentTheme = {
      preset: presetKey,
      primaryHue: preset.primaryHue,
      primarySat: preset.primarySat,
      secondaryHue: preset.secondaryHue,
      secondarySat: preset.secondarySat,
      bgLightness: preset.bgLightness,
      noiseOpacity: preset.noiseOpacity
    };
    this.applyTheme(this.currentTheme);
    this.updateControlsUI();
    this.save();
  },

  updateFromSliders() {
    const sPriHue = document.getElementById('slider-primary-hue');
    const sPriSat = document.getElementById('slider-primary-sat');
    const sSecHue = document.getElementById('slider-secondary-hue');
    const sSecSat = document.getElementById('slider-secondary-sat');
    const sBgL = document.getElementById('slider-bg-lightness');
    const sNoise = document.getElementById('slider-noise-opacity');

    if (sPriHue) this.currentTheme.primaryHue = parseInt(sPriHue.value, 10);
    if (sPriSat) this.currentTheme.primarySat = parseInt(sPriSat.value, 10);
    if (sSecHue) this.currentTheme.secondaryHue = parseInt(sSecHue.value, 10);
    if (sSecSat) this.currentTheme.secondarySat = parseInt(sSecSat.value, 10);
    if (sBgL) this.currentTheme.bgLightness = parseInt(sBgL.value, 10);
    if (sNoise) this.currentTheme.noiseOpacity = parseInt(sNoise.value, 10);

    this.currentTheme.preset = 'custom';
    this.applyTheme(this.currentTheme);

    const vPriHue = document.getElementById('val-primary-hue');
    const vPriSat = document.getElementById('val-primary-sat');
    const vSecHue = document.getElementById('val-secondary-hue');
    const vSecSat = document.getElementById('val-secondary-sat');
    const vBgL = document.getElementById('val-bg-lightness');
    const vNoise = document.getElementById('val-noise-opacity');

    if (vPriHue) vPriHue.textContent = `${this.currentTheme.primaryHue}°`;
    if (vPriSat) vPriSat.textContent = `${this.currentTheme.primarySat}%`;
    if (vSecHue) vSecHue.textContent = `${this.currentTheme.secondaryHue}°`;
    if (vSecSat) vSecSat.textContent = `${this.currentTheme.secondarySat}%`;
    if (vBgL) vBgL.textContent = `${this.currentTheme.bgLightness}%`;
    if (vNoise) vNoise.textContent = `${this.currentTheme.noiseOpacity}%`;

    const presetSelect = document.getElementById('preset-theme-select');
    if (presetSelect) presetSelect.value = 'custom';

    document.querySelectorAll('.clan-preset-card, .preset-btn').forEach(btn => btn.classList.remove('active'));
    this.save();
  },

  updateControlsUI() {
    const t = this.currentTheme;

    // Dropdown de seleção de tema
    const presetSelect = document.getElementById('preset-theme-select');
    if (presetSelect) {
      presetSelect.value = t.preset || 'custom';
    }

    const sPriHue = document.getElementById('slider-primary-hue');
    const sPriSat = document.getElementById('slider-primary-sat');
    const sSecHue = document.getElementById('slider-secondary-hue');
    const sSecSat = document.getElementById('slider-secondary-sat');
    const sBgL = document.getElementById('slider-bg-lightness');
    const sNoise = document.getElementById('slider-noise-opacity');

    if (sPriHue) sPriHue.value = t.primaryHue;
    if (sPriSat) sPriSat.value = t.primarySat;
    if (sSecHue) sSecHue.value = t.secondaryHue;
    if (sSecSat) sSecSat.value = t.secondarySat;
    if (sBgL) sBgL.value = t.bgLightness;
    if (sNoise) sNoise.value = t.noiseOpacity;

    const vPriHue = document.getElementById('val-primary-hue');
    const vPriSat = document.getElementById('val-primary-sat');
    const vSecHue = document.getElementById('val-secondary-hue');
    const vSecSat = document.getElementById('val-secondary-sat');
    const vBgL = document.getElementById('val-bg-lightness');
    const vNoise = document.getElementById('val-noise-opacity');

    if (vPriHue) vPriHue.textContent = `${t.primaryHue}°`;
    if (vPriSat) vPriSat.textContent = `${t.primarySat}%`;
    if (vSecHue) vSecHue.textContent = `${t.secondaryHue}°`;
    if (vSecSat) vSecSat.textContent = `${t.secondarySat}%`;
    if (vBgL) vBgL.textContent = `${t.bgLightness}%`;
    if (vNoise) vNoise.textContent = `${t.noiseOpacity}%`;

    document.querySelectorAll('.clan-preset-card, .preset-btn').forEach(btn => {
      if (btn.getAttribute('data-preset') === t.preset) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  },

  save() {
    if (AppState.activeCharacter) {
      AppState.activeCharacter.theme = { ...this.currentTheme };
      AppState.saveToStorage();
    }
    localStorage.setItem(THEME_CUSTOMIZATION_KEY, JSON.stringify(this.currentTheme));
  },

  reset() {
    this.applyPreset('red');
    showToast('Tema padrão (Vermelho Carmesim) restaurado!', 'info');
  }
};