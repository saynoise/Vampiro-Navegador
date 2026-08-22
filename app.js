/**
 * FICHA DE PERSONAGEM AUTOMATIZADA - VAMPIRO: A MÁSCARA (V20)
 * JavaScript Puro Modular (Vanilla JS, sem dependências)
 * Suporte a: Janelas Arrastáveis, Imã Magnético, Redimensionamento, Regra do 10 (2 sucessos) e 1 (cancela 1)
 */

'use strict';

const STORAGE_KEY = 'v20_character_sheets_db';
const ACTIVE_CHAR_KEY = 'v20_active_char_id';
const LAYOUT_POS_KEY = 'v20_window_positions';
const DISCORD_WEBHOOK_KEY = 'v20_discord_webhook_url';
const DISCORD_AUTO_SEND_KEY = 'v20_discord_auto_send';
const SNAP_GRID = 12; // Grade magnética de 12px para o efeito de ímã

const GENERATION_RULES = {
  '15ª': { label: '15ª Geração', maxBlood: 10, bloodPerTurn: 1, maxTrait: 5 },
  '14ª': { label: '14ª Geração', maxBlood: 10, bloodPerTurn: 1, maxTrait: 5 },
  '13ª': { label: '13ª Geração', maxBlood: 10, bloodPerTurn: 1, maxTrait: 5 },
  '12ª': { label: '12ª Geração', maxBlood: 11, bloodPerTurn: 1, maxTrait: 5 },
  '11ª': { label: '11ª Geração', maxBlood: 12, bloodPerTurn: 1, maxTrait: 5 },
  '10ª': { label: '10ª Geração', maxBlood: 13, bloodPerTurn: 1, maxTrait: 5 },
  '9ª':  { label: '9ª Geração',  maxBlood: 14, bloodPerTurn: 2, maxTrait: 5 },
  '8ª':  { label: '8ª Geração',  maxBlood: 15, bloodPerTurn: 3, maxTrait: 5 },
  '7ª':  { label: '7ª Geração',  maxBlood: 20, bloodPerTurn: 4, maxTrait: 6 },
  '6ª':  { label: '6ª Geração',  maxBlood: 30, bloodPerTurn: 6, maxTrait: 7 },
  '5ª':  { label: '5ª Geração',  maxBlood: 40, bloodPerTurn: 8, maxTrait: 8 },
  '4ª':  { label: '4ª Geração',  maxBlood: 50, bloodPerTurn: 10, maxTrait: 9 },
  '3ª':  { label: '3ª Geração',  maxBlood: 100, bloodPerTurn: 10, maxTrait: 10 }
};

const HEALTH_LEVELS = [
  { key: 'bruised', label: 'Escoriado', penalty: '-0' },
  { key: 'hurt', label: 'Machucado', penalty: '-1' },
  { key: 'injured', label: 'Ferido', penalty: '-1' },
  { key: 'wounded', label: 'Ferido Gravemente', penalty: '-2' },
  { key: 'mauled', label: 'Espancado', penalty: '-2' },
  { key: 'crippled', label: 'Aleijado', penalty: '-5' },
  { key: 'incapacitated', label: 'Incapacitado', penalty: 'Incapaz' }
];

const DAMAGE_CYCLE = ['', 'bashing', 'lethal', 'aggravated'];

function generateUniqueId() {
  return 'v20_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 8);
}

function snapToGrid(val, step = SNAP_GRID) {
  return Math.round(val / step) * step;
}

// =============================================================================
// GERENCIADOR DE TEMAS E PERSONALIZAÇÃO DE CORES
// =============================================================================
const THEME_CUSTOMIZATION_KEY = 'v20_theme_customizations';

const THEME_PRESETS = {
  red: {
    name: 'Vermelho (Carmesim)',
    primaryHue: 0,
    primarySat: 100,
    secondaryHue: 40,
    secondarySat: 65,
    bgLightness: 8,
    noiseOpacity: 7
  },
  green: {
    name: 'Verde (Esmeralda)',
    primaryHue: 142,
    primarySat: 80,
    secondaryHue: 85,
    secondarySat: 70,
    bgLightness: 7,
    noiseOpacity: 7
  },
  purple: {
    name: 'Roxo (Abissal)',
    primaryHue: 275,
    primarySat: 85,
    secondaryHue: 310,
    secondarySat: 65,
    bgLightness: 7,
    noiseOpacity: 7
  },
  yellow: {
    name: 'Amarelo (Âmbar)',
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

    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
    this.save();
  },

  updateControlsUI() {
    const t = this.currentTheme;

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

    document.querySelectorAll('.preset-btn').forEach(btn => {
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

function getGenerationRule(genStr) {
  if (!genStr) return GENERATION_RULES['13ª'];
  const clean = genStr.toString().trim();
  if (GENERATION_RULES[clean]) return GENERATION_RULES[clean];
  const match = clean.match(/(\d+)/);
  if (match) {
    const key = match[1] + 'ª';
    if (GENERATION_RULES[key]) return GENERATION_RULES[key];
  }
  return GENERATION_RULES['13ª'];
}

function syncBloodPoolWithGeneration(char) {
  if (!char.status) char.status = {};
  const rule = getGenerationRule(char.header ? char.header.generation : '13ª');
  const targetMax = rule.maxBlood;

  if (!Array.isArray(char.status.blood_pool)) {
    char.status.blood_pool = Array(targetMax).fill(false).map((_, i) => i < Math.min(10, targetMax));
    return;
  }

  if (char.status.blood_pool.length < targetMax) {
    const diff = targetMax - char.status.blood_pool.length;
    for (let i = 0; i < diff; i++) char.status.blood_pool.push(false);
  } else if (char.status.blood_pool.length > targetMax) {
    char.status.blood_pool = char.status.blood_pool.slice(0, targetMax);
  }
}

function createBlankCharacter(customName) {
  const defaultGen = '13ª';
  const genRule = GENERATION_RULES[defaultGen];

  return {
    id: generateUniqueId(),
    header: {
      name: customName || 'Novo Neófito',
      player: '',
      chronicle: '',
      nature: '',
      demeanor: '',
      clan: '',
      generation: defaultGen,
      sire: '',
      concept: '',
      avatar: ''
    },
    attributes: {
      physical: { strength: 1, dexterity: 1, stamina: 1 },
      social: { charisma: 1, manipulation: 1, appearance: 1 },
      mental: { perception: 1, intelligence: 1, wits: 1 }
    },
    abilities: {
      talents: { alertness: 0, athletics: 0, brawl: 0, foresight: 0, empathy: 0, expression: 0, intimidation: 0, leadership: 0, streetwise: 0, subterfuge: 0 },
      skills: { animal_ken: 0, crafts: 0, drive: 0, etiquette: 0, firearms: 0, melee: 0, performance: 0, larceny: 0, stealth: 0, survival: 0 },
      knowledges: { academics: 0, computer: 0, finance: 0, investigation: 0, law: 0, medicine: 0, occult: 0, politics: 0, science: 0, technology: 0 }
    },
    disciplines: [
      { id: generateUniqueId(), name: 'Potência', level: 1 },
      { id: generateUniqueId(), name: 'Celeridade', level: 1 }
    ],
    specializations: [
      { id: generateUniqueId(), name: 'Força: Empurrão Poderoso', level: 1 }
    ],
    backgrounds: [
      { id: generateUniqueId(), name: 'Recursos', level: 2 },
      { id: generateUniqueId(), name: 'Contatos', level: 1 }
    ],
    paths: [
      { id: generateUniqueId(), name: 'Trilha do Sangue (Principal)', level: 2 }
    ],
    rituals_list: [
      { id: generateUniqueId(), level: 1, name: 'Defesa do Refúgio Sagrado', description: 'Protege o refúgio contra a luz solar direta.' }
    ],
    virtues: { conscience: 1, self_control: 1, courage: 1 },
    status: {
      path_name: 'Humanidade',
      humanity: 7,
      willpower_perm: 5,
      willpower_temp: Array(10).fill(false),
      blood_pool: Array(genRule.maxBlood).fill(false).map((_, i) => i < genRule.maxBlood)
    },
    health: { bruised: '', hurt: '', injured: '', wounded: '', mauled: '', crippled: '', incapacitated: '' },
    notes: { merits_flaws: '', weakness: '', other_traits: '', history: '' },
    xp: { total: 0, spent: 0 },
    theme: {
      preset: 'red',
      primaryHue: 0,
      primarySat: 100,
      secondaryHue: 40,
      secondarySat: 65,
      bgLightness: 8,
      noiseOpacity: 7
    },
    settings: {
      discordWebhook: '',
      discordEmotes: {
        critico: '<:critico:1540580738007695512>',
        sucesso: '<:sucesso:1540580820127842344>',
        falha: '<:falha:1540580800456691773>',
        falhacritica: '<:falhacritica:1540580772652523600>'
      }
    },
    roll_history: []
  };
}

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
    } catch (e) {
      console.error('Erro ao ler do LocalStorage:', e);
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

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  let icon = '✨';
  if (type === 'success') icon = '🩸';
  if (type === 'danger') icon = '⚠️';
  if (type === 'info') icon = 'ℹ️';

  toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s, transform 0.4s';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

// =============================================================================
// GERENCIADOR DE JANELAS: ARRASTE MAGNÉTICO (ÍMÃ) & REDIMENSIONAMENTO DE ABAS
// =============================================================================
const DraggableWindowManager = {
  positions: {}, // { windowId: { x, y, w, h } }
  activeCard: null,
  isResizing: false,
  startX: 0,
  startY: 0,
  initialX: 0,
  initialY: 0,
  initialW: 0,
  initialH: 0,

  init() {
    this.injectResizeHandles();
    this.loadPositions();
    this.applyAllPositions();
    this.bindDragAndResizeEvents();
    this.setupResizeObserver();

    window.addEventListener('resize', () => {
      LinkCableSystem.updateWebLines();
    });

    window.addEventListener('scroll', () => {
      LinkCableSystem.updateWebLines();
    }, { passive: true, capture: true });
  },

  injectResizeHandles() {
    const cards = document.querySelectorAll('.draggable-card[data-window-id]');
    cards.forEach(card => {
      if (!card.querySelector('.card-resize-handle')) {
        const handle = document.createElement('span');
        handle.className = 'card-resize-handle';
        handle.title = 'Clique e arraste para redimensionar o tamanho da aba';
        handle.innerHTML = '◢';
        card.appendChild(handle);
      }
    });
  },

  loadPositions() {
    try {
      const saved = localStorage.getItem(LAYOUT_POS_KEY);
      this.positions = saved ? JSON.parse(saved) : {};
    } catch (e) {
      this.positions = {};
    }
  },

  savePositions() {
    try {
      localStorage.setItem(LAYOUT_POS_KEY, JSON.stringify(this.positions));
    } catch (e) {
      console.error('Erro ao salvar layout:', e);
    }
  },

  applyAllPositions() {
    const cards = document.querySelectorAll('.draggable-card[data-window-id]');
    cards.forEach(card => {
      const winId = card.getAttribute('data-window-id');
      const pos = this.positions[winId];
      if (pos) {
        if (pos.x !== undefined && pos.y !== undefined && (pos.x !== 0 || pos.y !== 0)) {
          card.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
          card.classList.add('is-custom-positioned');
        } else {
          card.style.transform = '';
          card.classList.remove('is-custom-positioned');
        }

        if (pos.w) card.style.width = `${pos.w}px`;
        else card.style.width = '';

        if (pos.h) card.style.height = `${pos.h}px`;
        else card.style.height = '';
        
        this.checkCardCollapseState(card);
      } else {
        card.style.transform = '';
        card.style.width = '';
        card.style.height = '';
        card.classList.remove('is-custom-positioned', 'is-collapsed-small');
      }
    });
  },

  checkCardCollapseState(card) {
    if (!card) return;
    const winId = card.getAttribute('data-window-id');
    const rect = card.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    // Se o card não tem altura customizada definida pelo usuário (layout padrão), nunca colapsa por altura
    const hasCustomHeight = !!card.style.height;
    
    let isHeightCollapsed = false;
    if (hasCustomHeight) {
      if (winId === 'win-xp' && rect.height < 52) isHeightCollapsed = true;
      else if (winId === 'win-willpower' && rect.height < 70) isHeightCollapsed = true;
      else if (winId === 'win-blood' && rect.height < 90) isHeightCollapsed = true;
      else if (rect.height < 55) isHeightCollapsed = true;
    }

    const isWidthCollapsed = rect.width < 195;

    if (isWidthCollapsed || isHeightCollapsed) {
      card.classList.add('is-collapsed-small');
    } else {
      card.classList.remove('is-collapsed-small');
    }
  },

  setupResizeObserver() {
    if (window.ResizeObserver) {
      const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          this.checkCardCollapseState(entry.target);
        }
      });
      document.querySelectorAll('.draggable-card[data-window-id]').forEach(card => observer.observe(card));
    }
  },

  resetPositions() {
    this.positions = {};
    localStorage.removeItem(LAYOUT_POS_KEY);
    const cards = document.querySelectorAll('.draggable-card[data-window-id]');
    cards.forEach(card => {
      card.style.transform = '';
      card.style.width = '';
      card.style.height = '';
      card.classList.remove('is-custom-positioned', 'is-dragging', 'is-resizing', 'snap-aligned', 'is-collapsed-small');
    });
    LinkCableSystem.updateWebLines();
    showToast('Layout e tamanhos das janelas restaurados para o padrão!', 'info');
  },

  bindDragAndResizeEvents() {
    const cards = document.querySelectorAll('.draggable-card[data-window-id]');
    
    cards.forEach(card => {
      const dragHandle = card.querySelector('.draggable-handle') || card;
      const resizeHandle = card.querySelector('.card-resize-handle');
      const winId = card.getAttribute('data-window-id');

      // 1. ARRASTE COM ÍMÃ (MAGNETIC DRAG)
      dragHandle.addEventListener('pointerdown', (e) => {
        const tag = e.target.tagName.toLowerCase();
        if (tag === 'input' || tag === 'select' || tag === 'button' || tag === 'textarea' || 
            e.target.classList.contains('dot') || e.target.classList.contains('trait-link-node') || 
            e.target.classList.contains('btn-add-trait') || e.target.classList.contains('card-resize-handle')) {
          return;
        }

        this.activeCard = card;
        this.isResizing = false;
        this.startX = e.clientX;
        this.startY = e.clientY;

        const currentPos = this.positions[winId] || { x: 0, y: 0 };
        this.initialX = currentPos.x || 0;
        this.initialY = currentPos.y || 0;

        card.classList.add('is-dragging');
        dragHandle.setPointerCapture(e.pointerId);
      });

      dragHandle.addEventListener('pointermove', (e) => {
        if (!this.activeCard || this.activeCard !== card || this.isResizing) return;

        const rawDx = e.clientX - this.startX;
        const rawDy = e.clientY - this.startY;
        
        // Efeito de ímã: Encaixa na grade magnética de 12px
        const snappedX = snapToGrid(this.initialX + rawDx, SNAP_GRID);
        const snappedY = snapToGrid(this.initialY + rawDy, SNAP_GRID);

        card.style.transform = `translate3d(${snappedX}px, ${snappedY}px, 0)`;
        card.classList.add('is-custom-positioned');
        card.classList.add('snap-aligned');

        requestAnimationFrame(() => LinkCableSystem.updateWebLines());
      });

      const endDrag = (e) => {
        if (!this.activeCard || this.activeCard !== card || this.isResizing) return;

        const rawDx = e.clientX - this.startX;
        const rawDy = e.clientY - this.startY;
        const finalX = snapToGrid(this.initialX + rawDx, SNAP_GRID);
        const finalY = snapToGrid(this.initialY + rawDy, SNAP_GRID);

        if (!this.positions[winId]) this.positions[winId] = {};
        this.positions[winId].x = finalX;
        this.positions[winId].y = finalY;
        this.savePositions();

        card.classList.remove('is-dragging', 'snap-aligned');
        try { dragHandle.releasePointerCapture(e.pointerId); } catch (_) {}
        this.activeCard = null;

        LinkCableSystem.updateWebLines();
      };

      dragHandle.addEventListener('pointerup', endDrag);
      dragHandle.addEventListener('pointercancel', endDrag);

      // 2. REDIMENSIONAMENTO DE TAMANHO (RESIZABLE CARDS)
      if (resizeHandle) {
        resizeHandle.addEventListener('pointerdown', (e) => {
          e.stopPropagation();
          this.activeCard = card;
          this.isResizing = true;
          this.startX = e.clientX;
          this.startY = e.clientY;

          const rect = card.getBoundingClientRect();
          this.initialW = rect.width;
          this.initialH = rect.height;

          card.classList.add('is-resizing');
          resizeHandle.classList.add('is-resizing');
          resizeHandle.setPointerCapture(e.pointerId);
        });

        resizeHandle.addEventListener('pointermove', (e) => {
          if (!this.activeCard || this.activeCard !== card || !this.isResizing) return;

          const rawDw = e.clientX - this.startX;
          const rawDh = e.clientY - this.startY;

          const newW = Math.max(140, snapToGrid(this.initialW + rawDw, SNAP_GRID));
          const newH = Math.max(42, snapToGrid(this.initialH + rawDh, SNAP_GRID));

          card.style.width = `${newW}px`;
          card.style.height = `${newH}px`;
          card.classList.add('is-custom-positioned');
          this.checkCardCollapseState(card);

          requestAnimationFrame(() => LinkCableSystem.updateWebLines());
        });

        const endResize = (e) => {
          if (!this.activeCard || this.activeCard !== card || !this.isResizing) return;

          const rect = card.getBoundingClientRect();
          const finalW = snapToGrid(rect.width, SNAP_GRID);
          const finalH = snapToGrid(rect.height, SNAP_GRID);

          if (!this.positions[winId]) this.positions[winId] = {};
          this.positions[winId].w = finalW;
          this.positions[winId].h = finalH;
          this.savePositions();
          this.checkCardCollapseState(card);

          card.classList.remove('is-resizing');
          resizeHandle.classList.remove('is-resizing');
          try { resizeHandle.releasePointerCapture(e.pointerId); } catch (_) {}
          
          this.activeCard = null;
          this.isResizing = false;

          LinkCableSystem.updateWebLines();
        };

        resizeHandle.addEventListener('pointerup', endResize);
        resizeHandle.addEventListener('pointercancel', endResize);
      }
    });
  }
};

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
// INTEGRAÇÃO COM DISCORD WEBHOOK (FETCH POST EMBED & PATCH EDIT)
// =============================================================================
const currentRollState = {
  char: null,
  totalPool: 0,
  difficulty: 6,
  rolls: [],
  traitsSummary: '',
  mathStr: '',
  successes: 0,
  tenCount: 0,
  botchCount: 0,
  netSuccesses: 0,
  outcomeBadgeText: '',
  isBotch: false,
  hasRerolled: false,
  lastDiscordMessageId: null,
  rerolledIndices: []
};

const DISCORD_EMOTES_KEY = 'v20_discord_custom_emotes';

const DiscordIntegration = {
  getUrl() {
    if (AppState.activeCharacter && AppState.activeCharacter.settings && typeof AppState.activeCharacter.settings.discordWebhook === 'string') {
      return AppState.activeCharacter.settings.discordWebhook.trim();
    }
    return '';
  },

  setUrl(url) {
    const cleanUrl = (url || '').trim();
    if (AppState.activeCharacter) {
      if (!AppState.activeCharacter.settings) AppState.activeCharacter.settings = {};
      AppState.activeCharacter.settings.discordWebhook = cleanUrl;
      AppState.saveToStorage();
    }
  },

  getEmotes() {
    const defaultEmotes = {
      critico: '<:critico:1540580738007695512>',
      sucesso: '<:sucesso:1540580820127842344>',
      falha: '<:falha:1540580800456691773>',
      falhacritica: '<:falhacritica:1540580772652523600>'
    };

    if (AppState.activeCharacter && AppState.activeCharacter.settings && AppState.activeCharacter.settings.discordEmotes) {
      return { ...defaultEmotes, ...AppState.activeCharacter.settings.discordEmotes };
    }

    return defaultEmotes;
  },

  setEmotes(emotes) {
    if (AppState.activeCharacter) {
      if (!AppState.activeCharacter.settings) AppState.activeCharacter.settings = {};
      AppState.activeCharacter.settings.discordEmotes = emotes;
      AppState.saveToStorage();
    }
  },

  async getValidAvatarUrl(header) {
    if (!header) return '';
    if (header.avatarUrl && header.avatarUrl.startsWith('http')) return header.avatarUrl;
    if (header.avatar && (header.avatar.startsWith('http://') || header.avatar.startsWith('https://'))) return header.avatar;
    if (header.avatar && header.avatar.startsWith('data:image/')) {
      const blob = dataURItoBlob(header.avatar);
      const hosted = await uploadImageToHost(blob);
      if (hosted) {
        header.avatarUrl = hosted;
        AppState.saveToStorage();
        return hosted;
      }
    }
    return '';
  },

  async sendRoll(data) {
    const rawUrl = this.getUrl();
    if (!rawUrl) return; // Envio sempre automático se houver webhook configurado

    // Adiciona ?wait=true para receber o ID da mensagem criada no Discord
    const url = rawUrl.includes('?') ? `${rawUrl}&wait=true` : `${rawUrl}?wait=true`;

    const char = data.char || {};
    const header = char.header || {};
    const charName = (header.name && header.name.trim()) ? header.name.trim() : 'Neófito';
    const charClan = (header.clan && header.clan.trim()) ? header.clan.trim() : 'Sem Clã';
    const playerName = (header.player && header.player.trim()) ? header.player.trim() : 'N/A';

    // Determina cor do Embed
    let embedColor = 0x8b0000; // Carmesim
    if (data.tenCount > 0 && data.netSuccesses > 0) embedColor = 0x06b6d4; // Ciano Crítico
    else if (data.netSuccesses > 0) embedColor = 0x22c55e; // Verde Sucesso
    else if (data.isBotch) embedColor = 0xff1111; // Vermelho Falha Crítica
    else embedColor = 0x555566; // Cinza Falha

    // Formata todos os dados juntos dentro de um único bloco ``
    const formattedDice = `\`${data.rolls.join(' ')}\``;

    // Nomes limpos dos traços (sem exibir quantidade de pontos)
    const cleanTraits = data.traitsSummary || 'Parada de Dados';

    // Texto do resultado final limpo sem emojis
    let outcomeClean = '';
    if (data.netSuccesses > 0) {
      outcomeClean = `${data.netSuccesses} Sucesso${data.netSuccesses > 1 ? 's' : ''}`;
    } else if (data.netSuccesses === 0) {
      outcomeClean = 'Falha Simples (0 Sucessos)';
    } else {
      if (data.botchCount > 0 && data.successes === 0) {
        outcomeClean = `Falha Crítica (${data.botchCount}x '1')`;
      } else {
        outcomeClean = 'Falha (Cancelado por 1s)';
      }
    }

    // Mapeia os emotes de cada dado para o texto que aparece antes do embed
    const customEmotes = this.getEmotes();
    const diceEmotes = data.rolls.map(r => {
      if (r === 10) return customEmotes.critico || ':critico:';
      if (r === 1) return customEmotes.falhacritica || ':falhacritica:';
      if (r >= data.difficulty) return customEmotes.sucesso || ':sucesso:';
      return customEmotes.falha || ':falha:';
    }).join(' ');

    const payload = {
      username: `${charName} (${charClan})`.slice(0, 80),
      content: diceEmotes,
      embeds: [
        {
          title: `Rolagem: ${cleanTraits}`,
          color: embedColor,
          fields: [
            {
              name: 'Personagem',
              value: `${charName} (${charClan})`,
              inline: true
            },
            {
              name: 'Jogador',
              value: playerName || 'N/A',
              inline: false
            },
            {
              name: 'Traços Utilizados',
              value: cleanTraits || 'Parada de Dados',
              inline: false
            },
            {
              name: 'Dificuldade',
              value: `Dif ${data.difficulty} (${data.totalPool} dados)`,
              inline: true
            },
            {
              name: 'Dados Rolados',
              value: formattedDice || '`Nenhum dado`',
              inline: false
            },
            {
              name: 'Resultado Final',
              value: `**${outcomeClean}**\n• Críticos (10): **${data.tenCount}**\n• Fracassos (1): **${data.botchCount}**`,
              inline: false
            }
          ],
          footer: {
            text: 'Vampiro: A Máscara (V20)'
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    const finalAvatar = await this.getValidAvatarUrl(header);
    if (finalAvatar) {
      payload.avatar_url = finalAvatar;
      payload.embeds[0].thumbnail = { url: finalAvatar };
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response && (response.ok || response.status === 204)) {
        showToast('Rolagem enviada para o Discord!', 'info');
        const resJson = await response.json().catch(() => null);
        if (resJson && resJson.id) {
          currentRollState.lastDiscordMessageId = resJson.id;
        }
      } else if (response) {
        const errData = await response.json().catch(() => ({}));
        console.error('Discord Webhook erro:', response.status, errData);
        showToast(`Erro Discord (${response.status})`, 'danger');
      }
    } catch (err) {
      console.error('Erro ao disparar Discord Webhook:', err);
      showToast('Erro ao enviar para o Discord (verifique o Webhook)', 'danger');
    }
  },

  async editLastRoll(data) {
    const rawUrl = this.getUrl();
    if (!rawUrl) return;

    if (!currentRollState.lastDiscordMessageId) {
      return this.sendRoll(data);
    }

    const cleanBaseUrl = rawUrl.split('?')[0];
    const patchUrl = `${cleanBaseUrl}/messages/${currentRollState.lastDiscordMessageId}`;

    const char = data.char || {};
    const header = char.header || {};
    const charName = (header.name && header.name.trim()) ? header.name.trim() : 'Neófito';
    const charClan = (header.clan && header.clan.trim()) ? header.clan.trim() : 'Sem Clã';
    const playerName = (header.player && header.player.trim()) ? header.player.trim() : 'N/A';

    let embedColor = 0x8b0000;
    if (data.tenCount > 0 && data.netSuccesses > 0) embedColor = 0x06b6d4; // Ciano Crítico
    else if (data.netSuccesses > 0) embedColor = 0x22c55e;
    else if (data.isBotch) embedColor = 0xff1111;
    else embedColor = 0x555566;

    const formattedDice = `\`${data.rolls.join(' ')}\``;
    const cleanTraits = data.traitsSummary || 'Parada de Dados';

    let outcomeClean = '';
    if (data.netSuccesses > 0) {
      outcomeClean = `${data.netSuccesses} Sucesso${data.netSuccesses > 1 ? 's' : ''}`;
    } else if (data.netSuccesses === 0) {
      outcomeClean = 'Falha Simples (0 Sucessos)';
    } else {
      if (data.botchCount > 0 && data.successes === 0) {
        outcomeClean = `Falha Crítica (${data.botchCount}x '1')`;
      } else {
        outcomeClean = 'Falha (Cancelado por 1s)';
      }
    }

    const customEmotes = this.getEmotes();
    const diceEmotes = data.rolls.map(r => {
      if (r === 10) return customEmotes.critico || ':critico:';
      if (r === 1) return customEmotes.falhacritica || ':falhacritica:';
      if (r >= data.difficulty) return customEmotes.sucesso || ':sucesso:';
      return customEmotes.falha || ':falha:';
    }).join(' ');

    const payload = {
      username: `${charName} (${charClan})`.slice(0, 80),
      content: diceEmotes,
      embeds: [
        {
          title: `Rolagem: ${cleanTraits} (Falhas Reroladas)`,
          color: embedColor,
          fields: [
            {
              name: 'Personagem',
              value: `${charName} (${charClan})`,
              inline: true
            },
            {
              name: 'Jogador',
              value: playerName || 'N/A',
              inline: false
            },
            {
              name: 'Traços Utilizados',
              value: cleanTraits || 'Parada de Dados',
              inline: false
            },
            {
              name: 'Dificuldade',
              value: `Dif ${data.difficulty} (${data.totalPool} dados)`,
              inline: true
            },
            {
              name: 'Dados Rolados (Após Rerrolar)',
              value: formattedDice || '`Nenhum dado`',
              inline: false
            },
            {
              name: 'Resultado Final',
              value: `**${outcomeClean}**\n• Críticos (10): **${data.tenCount}**\n• Fracassos (1): **${data.botchCount}**`,
              inline: false
            }
          ],
          footer: {
            text: 'Vampiro: A Máscara (V20) • Falhas Reroladas'
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    const finalAvatar = await this.getValidAvatarUrl(header);
    if (finalAvatar) {
      payload.embeds[0].thumbnail = { url: finalAvatar };
    }

    try {
      const response = await fetch(patchUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response && (response.ok || response.status === 204)) {
        showToast('Mensagem no Discord atualizada com as falhas reroladas!', 'success');
      } else if (response) {
        console.warn('Falha ao editar mensagem do Discord via PATCH (status ' + response.status + '), tentando envio normal');
        this.sendRoll(data);
      }
    } catch (err) {
      console.error('Erro ao editar mensagem no Discord:', err);
    }
  },

  async sendTestMessage() {
    const url = this.getUrl();
    if (!url) {
      showToast('Insira a URL do Webhook do Discord antes de testar!', 'danger');
      return;
    }

    const payload = {
      username: 'Vampiro: A Máscara (V20)',
      embeds: [
        {
          title: 'Teste de Integração com o Discord',
          description: 'A integração com a Ficha de Personagem Automatizada (V20) foi configurada com sucesso!\n\nAs próximas rolagens de dados disparadas na ficha aparecerão neste canal.',
          color: 0x8b0000,
          fields: [
            { name: 'Status da Conexão', value: 'Operacional (fetch POST ativo)', inline: true },
            { name: 'Edição', value: 'Vampiro: A Máscara V20', inline: true }
          ],
          footer: { text: 'Vampiro: A Máscara (V20) • Teste de Webhook' },
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 204) {
        showToast('Mensagem de teste enviada com sucesso para o Discord!', 'success');
      } else {
        showToast(`Erro ao testar Discord (Status ${response.status})`, 'danger');
      }
    } catch (err) {
      console.error('Erro no teste de Discord Webhook:', err);
      showToast('Falha na requisição ao Discord. Verifique a URL.', 'danger');
    }
  }
};

// =============================================================================
// SISTEMA DE LINK CABLE SEQUENCIAL COM FÍSICA E CABO CURVADO
// =============================================================================
const LinkCableSystem = {
  selectedNodes: [],
  animationFrameId: null,

  toggle(nodeData) {
    const existingIndex = this.selectedNodes.findIndex(n => n.id === nodeData.id);
    let isAdding = false;

    if (existingIndex >= 0) {
      this.selectedNodes.splice(existingIndex, 1);
      if (nodeData.buttonEl) nodeData.buttonEl.classList.remove('active-linked');
    } else {
      this.selectedNodes.push(nodeData);
      if (nodeData.buttonEl) {
        nodeData.buttonEl.classList.add('active-linked');
        nodeData.buttonEl.classList.add('node-connecting');
        setTimeout(() => {
          if (nodeData.buttonEl) nodeData.buttonEl.classList.remove('node-connecting');
        }, 550);
      }
      isAdding = true;
    }

    this.updateWebLines(isAdding && this.selectedNodes.length >= 2);
    this.updateDock();
  },

  clear() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.selectedNodes.forEach(n => {
      if (n.buttonEl) n.buttonEl.classList.remove('active-linked');
    });
    document.querySelectorAll('.card-cable-linked-active').forEach(c => c.classList.remove('card-cable-linked-active'));
    this.selectedNodes = [];
    this.updateWebLines(false);
    this.updateDock();
  },

  drawCables() {
    this.updateWebLines(false);
  },

  updateWebLines(animate = false) {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    const svgLinesGroup = document.getElementById('blood-web-lines');
    if (!svgLinesGroup) return;
    svgLinesGroup.innerHTML = '';

    // Limpa estado de brilho dos cards antes de reavaliar visibilidade
    document.querySelectorAll('.card-cable-linked-active').forEach(c => c.classList.remove('card-cable-linked-active'));

    if (this.selectedNodes.length === 0) return;

    // 1º Passo: Avalia a visibilidade de cada nó e coleta referências
    const rawNodes = this.selectedNodes.map(node => {
      if (!node.buttonEl) return null;
      const pageEl = node.buttonEl.closest('.page-container');
      if (pageEl && pageEl.classList.contains('hidden-page')) return null;

      const card = node.buttonEl.closest('.draggable-card') || node.buttonEl.closest('.status-card') || node.buttonEl.closest('.trait-category');
      const rect = node.buttonEl.getBoundingClientRect();

      let isNodeVisible = true;
      if (rect.width === 0 || rect.height === 0) {
        isNodeVisible = false;
      } else if (card) {
        const cardRect = card.getBoundingClientRect();
        if (card.classList.contains('is-collapsed-small')) {
          isNodeVisible = false;
        } else if (
          rect.bottom <= cardRect.top + 4 ||
          rect.top >= cardRect.bottom - 4 ||
          rect.right <= cardRect.left + 4 ||
          rect.left >= cardRect.right - 4
        ) {
          isNodeVisible = false;
        }
      }

      if (isNodeVisible) {
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          isCardFallback: false,
          card: null,
          cardRect: null
        };
      }

      // Se a bolinha selecionada não estiver visível (card colapsado/oculto), ativa brilho no card
      if (card) {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.width > 0 && cardRect.height > 0) {
          card.classList.add('card-cable-linked-active');
          return {
            x: cardRect.left + cardRect.width / 2,
            y: cardRect.top + cardRect.height / 2,
            isCardFallback: true,
            card: card,
            cardRect: cardRect
          };
        }
      }

      return null;
    }).filter(c => c !== null);

    if (rawNodes.length === 0) return;

    // Referência de ancoragem inferior caso haja apenas 1 nó
    const dockEl = document.getElementById('dice-roller-dock');
    const dockRect = dockEl ? dockEl.getBoundingClientRect() : null;
    const defaultTarget = dockRect 
      ? { x: dockRect.left + dockRect.width / 2, y: dockRect.top + 8 }
      : { x: window.innerWidth / 2, y: window.innerHeight - 30 };

    // 2º Passo: Calcula o ponto grudado exatamente na borda do container na direção do cabo
    const coords = rawNodes.map((item, idx) => {
      if (!item.isCardFallback) {
        return { x: item.x, y: item.y, isCardFallback: false };
      }

      let target = defaultTarget;
      if (rawNodes.length > 1) {
        if (idx < rawNodes.length - 1) target = rawNodes[idx + 1];
        else target = rawNodes[idx - 1];
      }

      const cx = item.cardRect.left + item.cardRect.width / 2;
      const cy = item.cardRect.top + item.cardRect.height / 2;
      const dx = target.x - cx;
      const dy = target.y - cy;

      let borderX = cx;
      let borderY = item.cardRect.top;

      if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) {
        const halfW = item.cardRect.width / 2;
        const halfH = item.cardRect.height / 2;
        const scaleX = dx !== 0 ? halfW / Math.abs(dx) : Infinity;
        const scaleY = dy !== 0 ? halfH / Math.abs(dy) : Infinity;
        const scale = Math.min(scaleX, scaleY);
        borderX = cx + dx * scale;
        borderY = cy + dy * scale;
      }

      return {
        x: borderX,
        y: borderY,
        isCardFallback: true
      };
    });

    if (coords.length === 0) return;

    // Desenha o anel de brilho (aura) e conector no overlay SVG global (z-index 90, 100% livre de qualquer corte)
    coords.forEach(p => {
      const aura = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      aura.setAttribute('cx', p.x);
      aura.setAttribute('cy', p.y);
      aura.setAttribute('r', '9.5');
      aura.setAttribute('class', 'cable-node-aura');
      svgLinesGroup.appendChild(aura);

      const joint = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      joint.setAttribute('cx', p.x);
      joint.setAttribute('cy', p.y);
      joint.setAttribute('r', '4.5');
      joint.setAttribute('class', 'cable-connector-joint');
      svgLinesGroup.appendChild(joint);
    });

    if (coords.length < 2) return;

    const segments = [];

    for (let i = 0; i < coords.length - 1; i++) {
      const p1 = coords[i];
      const p2 = coords[i + 1];

      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const dist = Math.hypot(dx, dy);

      const baseSag = Math.min(220, Math.max(35, dist * 0.26 + Math.abs(dx) * 0.12));
      const cp1x = p1.x + dx * 0.25;
      const cp2x = p1.x + dx * 0.75;

      const glowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      glowPath.setAttribute('class', 'blood-cable-path-glow');
      svgLinesGroup.appendChild(glowPath);

      const mainPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      mainPath.setAttribute('class', 'blood-cable-path-main');
      svgLinesGroup.appendChild(mainPath);

      const corePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      corePath.setAttribute('class', 'blood-cable-path-core');
      svgLinesGroup.appendChild(corePath);

      segments.push({
        p1, p2, dx, dy, dist, cp1x, cp2x, baseSag,
        glowPath, mainPath, corePath,
        isNew: i === coords.length - 2
      });
    }

    const renderSegments = (progress = 1) => {
      // Oscilação suave com início em zero (sem salto inicial brusco) e amortecimento gradual
      const decay = progress >= 1 ? 0 : Math.exp(-progress * 2.8);
      const verticalSway = progress >= 1 ? 0 : Math.sin(progress * Math.PI * 2.4) * decay;
      const horizontalSway = progress >= 1 ? 0 : Math.sin(progress * Math.PI * 1.8) * decay;

      segments.forEach((seg) => {
        let currentSag = seg.baseSag;
        let lateralOffset = 0;

        // APENAS A NOVA LIGAÇÃO BALANÇA COM AMPLITUDE SUAVE E DELICADA
        if (seg.isNew && progress < 1) {
          currentSag = seg.baseSag * (1 + 0.14 * verticalSway);
          const safeDist = seg.dist || 100;
          const lateralAmp = Math.min(15, Math.max(5, safeDist * 0.028));
          lateralOffset = lateralAmp * horizontalSway;
        }

        const cp1x = seg.cp1x + lateralOffset * 0.6;
        const cp1y = seg.p1.y + Math.max(0, seg.dy * 0.3) + currentSag;

        const cp2x = seg.cp2x + lateralOffset * 0.8;
        const cp2y = seg.p2.y - Math.max(0, -seg.dy * 0.3) + currentSag;

        const d = `M ${seg.p1.x} ${seg.p1.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${seg.p2.x} ${seg.p2.y}`;
        seg.glowPath.setAttribute('d', d);
        seg.mainPath.setAttribute('d', d);
        seg.corePath.setAttribute('d', d);
      });
    };

    if (!animate) {
      renderSegments(1);
      return;
    }

    // Inicia suavemente a partir do estado de repouso (offset zero)
    renderSegments(0);

    // ANIMAÇÃO DE BALANÇO SUAVE E DELICADA (1200ms DE AMORTECIMENTO TRANQUILO)
    const startTime = performance.now();
    const duration = 1200; // ms

    const animateSway = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      renderSegments(progress);

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(animateSway);
      } else {
        renderSegments(1);
        this.animationFrameId = null;
      }
    };

    this.animationFrameId = requestAnimationFrame(animateSway);
  },

  updateDock() {
    const dock = document.getElementById('dice-roller-dock');
    const badgesContainer = document.getElementById('dock-selected-traits-list');
    const mathDisplay = document.getElementById('dock-pool-math');
    const totalBadge = document.getElementById('dock-pool-total');
    const commandInput = document.getElementById('dock-command-input');
    const resultsContainer = document.getElementById('dock-dice-results');

    if (!dock) return;

    if (this.selectedNodes.length === 0) {
      dock.classList.add('hidden');
      if (resultsContainer) resultsContainer.classList.add('hidden');
      return;
    }

    dock.classList.remove('hidden');

    if (badgesContainer) {
      badgesContainer.innerHTML = '';
      this.selectedNodes.forEach((node, idx) => {
        const badge = document.createElement('span');
        badge.className = 'dock-trait-badge';
        badge.innerHTML = `${node.label} <strong>[${node.value}]</strong>`;
        badgesContainer.appendChild(badge);
        
        if (idx < this.selectedNodes.length - 1) {
          const arrow = document.createElement('span');
          arrow.style.color = '#ff4d4d';
          arrow.style.fontWeight = 'bold';
          arrow.textContent = '➔';
          badgesContainer.appendChild(arrow);
        }
      });
    }

    const total = this.selectedNodes.reduce((acc, curr) => acc + (parseInt(curr.value, 10) || 0), 0);
    const mathStr = this.selectedNodes.map(n => `${n.label} (${n.value})`).join(' + ');

    if (mathDisplay) mathDisplay.textContent = mathStr || `${total} Dados`;
    if (totalBadge) totalBadge.textContent = total;
    if (commandInput) commandInput.value = `!vr ${total}`;
  },

  refreshNodeValues() {
    this.selectedNodes.forEach(node => {
      if (node.getter) node.value = node.getter();
    });
    this.updateDock();
  }
};

// =============================================================================
// RENDERIZAÇÃO DA INTERFACE, ESPECIALIZAÇÕES, CAMINHOS E RITUAIS
// =============================================================================
const UIRenderer = {
  
  renderAll() {
    const char = AppState.activeCharacter;
    if (!char) return;

    syncBloodPoolWithGeneration(char);
    this.updateDropdown();
    this.bindInputs(char);
    this.renderAvatar(char);
    this.renderAllDots(char);
    this.renderDynamicDisciplines(char);
    this.renderDynamicSpecializations(char);
    this.renderDynamicBackgrounds(char);
    this.renderDynamicPaths(char);
    this.renderDynamicRituals(char);
    this.renderWillpowerTemp(char);
    this.renderBloodPool(char);
    this.renderHealthTrack(char);
    this.updateXPCalculation(char);
    this.bindLinkCableNodes(char);
    DraggableWindowManager.applyAllPositions();
  },

  renderAvatar(char) {
    const img = document.getElementById('char-avatar-img');
    const placeholder = document.getElementById('char-avatar-placeholder');
    const btnRemove = document.getElementById('btn-avatar-remove');

    if (!img || !placeholder) return;

    const avatarUrl = (char && char.header && char.header.avatar) ? char.header.avatar.trim() : '';

    if (avatarUrl) {
      img.src = avatarUrl;
      img.classList.remove('hidden');
      placeholder.classList.add('hidden');
      if (btnRemove) btnRemove.classList.remove('hidden');
    } else {
      img.src = '';
      img.classList.add('hidden');
      placeholder.classList.remove('hidden');
      if (btnRemove) btnRemove.classList.add('hidden');
    }
  },

  updateDropdown() {
    const select = document.getElementById('character-select');
    if (!select) return;
    select.innerHTML = '';
    AppState.characters.forEach(char => {
      const opt = document.createElement('option');
      opt.value = char.id;
      const charName = (char.header && char.header.name && char.header.name.trim()) ? char.header.name.trim() : 'Sem Nome';
      const charClan = (char.header && char.header.clan && char.header.clan.trim()) ? ` (${char.header.clan})` : '';
      const charGen = (char.header && char.header.generation) ? ` - ${char.header.generation}` : '';
      opt.textContent = charName + charClan + charGen;
      if (char.id === AppState.activeCharacter.id) opt.selected = true;
      select.appendChild(opt);
    });
  },

  bindInputs(char) {
    const boundElements = document.querySelectorAll('[data-bind]');
    boundElements.forEach(el => {
      const path = el.getAttribute('data-bind');
      const val = getNestedValue(char, path);
      if (val !== undefined && val !== null) el.value = val;
      else el.value = '';
    });
  },

  renderAllDots(char) {
    const dotContainers = document.querySelectorAll('.trait-row[data-trait] .dots-group, .dots-group[data-trait]');
    
    dotContainers.forEach(container => {
      const row = container.closest('[data-trait]') || container;
      const traitPath = row.getAttribute('data-trait');
      const min = parseInt(container.getAttribute('data-min') || '0', 10);
      const max = parseInt(container.getAttribute('data-max') || '9', 10);
      let currentVal = getNestedValue(char, traitPath);
      
      if (currentVal === undefined || currentVal === null) {
        currentVal = min;
        setNestedValue(char, traitPath, currentVal);
      }

      container.setAttribute('data-val', currentVal);
      this.buildDotsHtml(container, currentVal, min, max, (newVal) => {
        setNestedValue(AppState.activeCharacter, traitPath, newVal);
        AppState.saveToStorage();
        this.renderAllDots(AppState.activeCharacter);
        LinkCableSystem.refreshNodeValues();
      });
    });
  },

  buildDotsHtml(container, currentVal, min, max, onValueChange) {
    container.innerHTML = '';
    for (let i = 1; i <= max; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i <= currentVal ? ' active' : '');
      dot.dataset.index = i;
      dot.title = `${i} / ${max}`;

      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        let newVal = i;
        if (currentVal === i) newVal = Math.max(min, i - 1);
        onValueChange(newVal);
      });

      dot.addEventListener('mouseenter', () => {
        const dots = container.querySelectorAll('.dot');
        dots.forEach((d, idx) => {
          if (idx < i) d.classList.add('hover-fill');
          else d.classList.remove('hover-fill');
        });
      });

      container.addEventListener('mouseleave', () => {
        const dots = container.querySelectorAll('.dot');
        dots.forEach(d => d.classList.remove('hover-fill'));
      });

      container.appendChild(dot);
    }
  },

  bindLinkCableNodes(char) {
    const rows = document.querySelectorAll('.trait-row[data-trait]');
    rows.forEach(row => {
      const linkBtn = row.querySelector('.trait-link-node');
      const traitPath = row.getAttribute('data-trait');
      const label = row.getAttribute('data-label') || (row.querySelector('.trait-name') ? row.querySelector('.trait-name').textContent : 'Traço');
      
      if (linkBtn) {
        linkBtn.onclick = (e) => {
          e.stopPropagation();

          const getValue = () => {
            if (traitPath === 'status.willpower_perm') {
              const perm = parseInt(getNestedValue(AppState.activeCharacter, 'status.willpower_perm'), 10) || 0;
              const tempSpent = (AppState.activeCharacter && AppState.activeCharacter.status && Array.isArray(AppState.activeCharacter.status.willpower_temp))
                ? AppState.activeCharacter.status.willpower_temp.filter(Boolean).length
                : 0;
              return Math.max(0, perm - tempSpent);
            }
            return getNestedValue(AppState.activeCharacter, traitPath) || 0;
          };

          const currentVal = getValue();
          LinkCableSystem.toggle({
            id: traitPath,
            label: label,
            value: currentVal,
            buttonEl: linkBtn,
            getter: getValue
          });
        };
      }
    });
  },

  renderDynamicDisciplines(char) {
    const list = document.getElementById('disciplines-list');
    if (!list) return;
    list.innerHTML = '';
    if (!Array.isArray(char.disciplines)) char.disciplines = [];

    char.disciplines.forEach((disc, index) => {
      const row = document.createElement('div');
      row.className = 'dynamic-row';

      const linkBtn = document.createElement('button');
      linkBtn.type = 'button';
      linkBtn.className = 'trait-link-node';
      linkBtn.title = 'Conectar Disciplina para rolagem';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'dynamic-input';
      input.placeholder = 'Nome da Disciplina';
      input.value = disc.name || '';
      input.addEventListener('input', (e) => {
        disc.name = e.target.value;
        AppState.saveToStorage();
        LinkCableSystem.refreshNodeValues();
      });

      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'dots-group dots-9';
      dotsContainer.setAttribute('data-min', '0');
      dotsContainer.setAttribute('data-max', '9');
      dotsContainer.setAttribute('data-val', disc.level || 0);

      this.buildDotsHtml(dotsContainer, disc.level || 0, 0, 9, (newVal) => {
        disc.level = newVal;
        AppState.saveToStorage();
        this.renderDynamicDisciplines(AppState.activeCharacter);
        LinkCableSystem.refreshNodeValues();
      });

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'btn-remove-trait';
      removeBtn.title = 'Remover Disciplina';
      removeBtn.innerHTML = '✕';
      removeBtn.addEventListener('click', () => {
        char.disciplines.splice(index, 1);
        AppState.saveToStorage();
        this.renderDynamicDisciplines(AppState.activeCharacter);
        LinkCableSystem.clear();
      });

      linkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const discLabel = disc.name ? disc.name.trim() : `Disciplina #${index + 1}`;
        LinkCableSystem.toggle({
          id: `disc_${disc.id || index}`,
          label: discLabel,
          value: disc.level || 0,
          buttonEl: linkBtn,
          getter: () => disc.level || 0
        });
      });

      row.appendChild(linkBtn);
      row.appendChild(input);
      row.appendChild(dotsContainer);
      row.appendChild(removeBtn);
      list.appendChild(row);
    });
  },

  renderDynamicSpecializations(char) {
    const list = document.getElementById('specializations-list');
    if (!list) return;
    list.innerHTML = '';
    if (!Array.isArray(char.specializations)) char.specializations = [];

    char.specializations.forEach((spec, index) => {
      const row = document.createElement('div');
      row.className = 'dynamic-row';

      const linkBtn = document.createElement('button');
      linkBtn.type = 'button';
      linkBtn.className = 'trait-link-node';
      linkBtn.title = 'Conectar Especialização para rolagem';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'dynamic-input';
      input.placeholder = 'Ex: Força: Empurrão, Snip...';
      input.value = spec.name || '';
      input.addEventListener('input', (e) => {
        spec.name = e.target.value;
        AppState.saveToStorage();
        LinkCableSystem.refreshNodeValues();
      });

      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'dots-group dots-9';
      dotsContainer.setAttribute('data-min', '0');
      dotsContainer.setAttribute('data-max', '9');
      dotsContainer.setAttribute('data-val', spec.level || 0);

      this.buildDotsHtml(dotsContainer, spec.level || 0, 0, 9, (newVal) => {
        spec.level = newVal;
        AppState.saveToStorage();
        this.renderDynamicSpecializations(AppState.activeCharacter);
        LinkCableSystem.refreshNodeValues();
      });

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'btn-remove-trait';
      removeBtn.title = 'Remover Especialização';
      removeBtn.innerHTML = '✕';
      removeBtn.addEventListener('click', () => {
        char.specializations.splice(index, 1);
        AppState.saveToStorage();
        this.renderDynamicSpecializations(AppState.activeCharacter);
        LinkCableSystem.clear();
      });

      linkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const specLabel = spec.name ? spec.name.trim() : `Especialização #${index + 1}`;
        LinkCableSystem.toggle({
          id: `spec_${spec.id || index}`,
          label: specLabel,
          value: spec.level || 0,
          buttonEl: linkBtn,
          getter: () => spec.level || 0
        });
      });

      row.appendChild(linkBtn);
      row.appendChild(input);
      row.appendChild(dotsContainer);
      row.appendChild(removeBtn);
      list.appendChild(row);
    });
  },

  renderDynamicBackgrounds(char) {
    const list = document.getElementById('backgrounds-list');
    if (!list) return;
    list.innerHTML = '';
    if (!Array.isArray(char.backgrounds)) char.backgrounds = [];

    char.backgrounds.forEach((bg, index) => {
      const row = document.createElement('div');
      row.className = 'dynamic-row';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'dynamic-input';
      input.placeholder = 'Nome do Antecedente';
      input.value = bg.name || '';
      input.addEventListener('input', (e) => {
        bg.name = e.target.value;
        AppState.saveToStorage();
      });

      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'dots-group dots-9';
      dotsContainer.setAttribute('data-min', '0');
      dotsContainer.setAttribute('data-max', '9');
      dotsContainer.setAttribute('data-val', bg.level || 0);

      this.buildDotsHtml(dotsContainer, bg.level || 0, 0, 9, (newVal) => {
        bg.level = newVal;
        AppState.saveToStorage();
        this.renderDynamicBackgrounds(AppState.activeCharacter);
      });

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'btn-remove-trait';
      removeBtn.title = 'Remover Antecedente';
      removeBtn.innerHTML = '✕';
      removeBtn.addEventListener('click', () => {
        char.backgrounds.splice(index, 1);
        AppState.saveToStorage();
        this.renderDynamicBackgrounds(AppState.activeCharacter);
      });

      row.appendChild(input);
      row.appendChild(dotsContainer);
      row.appendChild(removeBtn);
      list.appendChild(row);
    });
  },

  renderDynamicPaths(char) {
    const list = document.getElementById('paths-list');
    if (!list) return;
    list.innerHTML = '';
    if (!Array.isArray(char.paths)) char.paths = [];

    char.paths.forEach((pth, index) => {
      const row = document.createElement('div');
      row.className = 'dynamic-row';

      const linkBtn = document.createElement('button');
      linkBtn.type = 'button';
      linkBtn.className = 'trait-link-node';
      linkBtn.title = 'Conectar Caminho para rolagem';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'dynamic-input';
      input.placeholder = 'Nome do Caminho';
      input.value = pth.name || '';
      input.addEventListener('input', (e) => {
        pth.name = e.target.value;
        AppState.saveToStorage();
        LinkCableSystem.refreshNodeValues();
      });

      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'dots-group dots-9';
      dotsContainer.setAttribute('data-min', '0');
      dotsContainer.setAttribute('data-max', '9');
      dotsContainer.setAttribute('data-val', pth.level || 0);

      this.buildDotsHtml(dotsContainer, pth.level || 0, 0, 9, (newVal) => {
        pth.level = newVal;
        AppState.saveToStorage();
        this.renderDynamicPaths(AppState.activeCharacter);
        LinkCableSystem.refreshNodeValues();
      });

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'btn-remove-trait';
      removeBtn.title = 'Remover Caminho';
      removeBtn.innerHTML = '✕';
      removeBtn.addEventListener('click', () => {
        char.paths.splice(index, 1);
        AppState.saveToStorage();
        this.renderDynamicPaths(AppState.activeCharacter);
        LinkCableSystem.clear();
      });

      linkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pthLabel = pth.name ? pth.name.trim() : `Caminho #${index + 1}`;
        LinkCableSystem.toggle({
          id: `path_${pth.id || index}`,
          label: pthLabel,
          value: pth.level || 0,
          buttonEl: linkBtn,
          getter: () => pth.level || 0
        });
      });

      row.appendChild(linkBtn);
      row.appendChild(input);
      row.appendChild(dotsContainer);
      row.appendChild(removeBtn);
      list.appendChild(row);
    });
  },

  renderDynamicRituals(char) {
    const list = document.getElementById('rituals-list');
    if (!list) return;
    list.innerHTML = '';
    if (!Array.isArray(char.rituals_list)) char.rituals_list = [];

    char.rituals_list.forEach((rit, index) => {
      const card = document.createElement('div');
      card.className = 'ritual-card-item';

      const headerRow = document.createElement('div');
      headerRow.className = 'ritual-header-row';

      const levelSelect = document.createElement('select');
      levelSelect.className = 'generation-dropdown';
      levelSelect.style.width = '75px';
      levelSelect.style.padding = '2px 4px';
      for (let lvl = 1; lvl <= 9; lvl++) {
        const opt = document.createElement('option');
        opt.value = lvl;
        opt.textContent = `Nível ${lvl}`;
        if (rit.level == lvl) opt.selected = true;
        levelSelect.appendChild(opt);
      }
      levelSelect.addEventListener('change', (e) => {
        rit.level = parseInt(e.target.value, 10) || 1;
        AppState.saveToStorage();
      });

      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.className = 'ritual-name-input';
      nameInput.placeholder = 'Nome do Ritual';
      nameInput.value = rit.name || '';
      nameInput.addEventListener('input', (e) => {
        rit.name = e.target.value;
        AppState.saveToStorage();
      });

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'btn-remove-trait';
      removeBtn.title = 'Remover Ritual';
      removeBtn.innerHTML = '✕';
      removeBtn.addEventListener('click', () => {
        char.rituals_list.splice(index, 1);
        AppState.saveToStorage();
        this.renderDynamicRituals(AppState.activeCharacter);
      });

      headerRow.appendChild(levelSelect);
      headerRow.appendChild(nameInput);
      headerRow.appendChild(removeBtn);

      const descTextarea = document.createElement('textarea');
      descTextarea.className = 'ritual-desc-textarea';
      descTextarea.rows = 2;
      descTextarea.placeholder = 'Descrição, ingredientes e efeitos do ritual...';
      descTextarea.value = rit.description || '';
      descTextarea.addEventListener('input', (e) => {
        rit.description = e.target.value;
        AppState.saveToStorage();
      });

      card.appendChild(headerRow);
      card.appendChild(descTextarea);
      list.appendChild(card);
    });
  },

  renderWillpowerTemp(char) {
    const container = document.getElementById('willpower-temp-boxes');
    if (!container) return;
    container.innerHTML = '';
    if (!Array.isArray(char.status.willpower_temp) || char.status.willpower_temp.length !== 10) {
      char.status.willpower_temp = Array(10).fill(false);
    }
    for (let i = 0; i < 10; i++) {
      const box = document.createElement('div');
      box.className = 'box-item' + (char.status.willpower_temp[i] ? ' checked' : '');
      box.title = `Ponto de Vontade Gasto #${i + 1}`;
      box.addEventListener('click', () => {
        char.status.willpower_temp[i] = !char.status.willpower_temp[i];
        AppState.saveToStorage();
        this.renderWillpowerTemp(AppState.activeCharacter);
        LinkCableSystem.refreshNodeValues();
      });
      container.appendChild(box);
    }
  },

  renderBloodPool(char) {
    const container = document.getElementById('blood-pool-grid');
    const counterDisplay = document.getElementById('blood-count-display');
    const rulesInfo = document.getElementById('generation-rules-info');
    if (!container) return;
    container.innerHTML = '';

    const gen = char.header && char.header.generation ? char.header.generation : '13ª';
    const rule = getGenerationRule(gen);
    syncBloodPoolWithGeneration(char);

    const totalMax = rule.maxBlood;
    let activeCount = 0;

    for (let i = 0; i < totalMax; i++) {
      const isFilled = char.status.blood_pool[i] === true;
      if (isFilled) activeCount++;
      const bloodPt = document.createElement('div');
      bloodPt.className = 'blood-point' + (isFilled ? ' active' : '');
      bloodPt.title = `Ponto de Sangue ${i + 1} de ${totalMax}`;
      bloodPt.addEventListener('click', () => {
        char.status.blood_pool[i] = !char.status.blood_pool[i];
        AppState.saveToStorage();
        this.renderBloodPool(AppState.activeCharacter);
      });
      container.appendChild(bloodPt);
    }

    if (counterDisplay) counterDisplay.textContent = `${activeCount} / ${totalMax}`;
    if (rulesInfo) {
      rulesInfo.innerHTML = `
        <span>Geração: <strong>${rule.label || gen}</strong></span> • 
        <span>Max: <strong>${rule.maxBlood} pts</strong></span> • 
        <span>Gasto/Turno: <strong>${rule.bloodPerTurn} pt${rule.bloodPerTurn > 1 ? 's' : ''}</strong></span>
      `;
    }
  },

  renderHealthTrack(char) {
    const container = document.getElementById('health-track-list');
    if (!container) return;
    container.innerHTML = '';
    if (!char.health) char.health = { bruised: '', hurt: '', injured: '', wounded: '', mauled: '', crippled: '', incapacitated: '' };

    HEALTH_LEVELS.forEach(lvl => {
      const row = document.createElement('div');
      row.className = 'health-row';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'health-name';
      nameSpan.textContent = lvl.label;

      const penaltySpan = document.createElement('span');
      penaltySpan.className = 'health-penalty';
      penaltySpan.textContent = lvl.penalty;

      const box = document.createElement('div');
      const currentState = char.health[lvl.key] || '';
      box.className = 'health-box' + (currentState ? ` state-${currentState}` : '');
      box.title = `Estado: ${currentState || 'Livre'}`;

      box.addEventListener('click', () => {
        const nextState = getNextDamageState(currentState);
        char.health[lvl.key] = nextState;
        AppState.saveToStorage();
        this.renderHealthTrack(AppState.activeCharacter);
      });

      row.appendChild(nameSpan);
      row.appendChild(penaltySpan);
      row.appendChild(box);
      container.appendChild(row);
    });
  },

  updateXPCalculation(char) {
    const total = parseInt(char.xp && char.xp.total ? char.xp.total : 0, 10) || 0;
    const spent = parseInt(char.xp && char.xp.spent ? char.xp.spent : 0, 10) || 0;
    const currentDisplay = document.getElementById('xp-current-display');
    if (currentDisplay) {
      const available = total - spent;
      currentDisplay.textContent = available;
      if (available < 0) {
        currentDisplay.style.color = '#ff5555';
        currentDisplay.style.borderColor = '#991111';
      } else {
        currentDisplay.style.color = '#55ff55';
        currentDisplay.style.borderColor = '#1e451e';
      }
    }
  }
};

// =============================================================================
// EVENTOS, ABAS DE PÁGINAS, ROLAGEM (REGRA DO 10 & 1) E EXPORTAÇÃO
// =============================================================================
function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  const parts = path.split('.');
  let curr = obj;
  for (const p of parts) {
    if (curr === undefined || curr === null) return undefined;
    curr = curr[p];
  }
  return curr;
}

function setNestedValue(obj, path, value) {
  if (!obj || !path) return;
  const parts = path.split('.');
  let curr = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (!curr[p] || typeof curr[p] !== 'object') curr[p] = {};
    curr = curr[p];
  }
  curr[parts[parts.length - 1]] = value;
}

const DICE_HISTORY_KEY = 'v20_dice_roll_history';

const DiceHistoryManager = {
  getHistory() {
    if (AppState.activeCharacter && Array.isArray(AppState.activeCharacter.roll_history)) {
      return AppState.activeCharacter.roll_history;
    }
    return [];
  },

  saveHistory(history) {
    const trimmed = history.slice(-60);
    if (AppState.activeCharacter) {
      AppState.activeCharacter.roll_history = trimmed;
      AppState.saveToStorage();
    }
    this.updateBadgeCount();
  },

  addRoll(rollState) {
    const history = this.getHistory();
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const charName = (rollState.char && rollState.char.header && rollState.char.header.name && rollState.char.header.name.trim()) 
      ? rollState.char.header.name.trim() 
      : 'Personagem';

    const entry = {
      id: Date.now().toString(),
      charName: charName,
      time: timeStr,
      traitsSummary: rollState.traitsSummary || 'Parada de Dados',
      difficulty: rollState.difficulty,
      totalPool: rollState.totalPool,
      rolls: [...rollState.rolls],
      successes: rollState.successes,
      tenCount: rollState.tenCount,
      botchCount: rollState.botchCount,
      netSuccesses: rollState.netSuccesses,
      isBotch: rollState.isBotch,
      hasRerolled: rollState.hasRerolled || false,
      rerolledIndices: rollState.rerolledIndices ? [...rollState.rerolledIndices] : []
    };

    // Adiciona ao final da lista (mais antigas no topo, mais recentes embaixo)
    history.push(entry);
    this.saveHistory(history);
  },

  updateLastRoll(rollState) {
    const history = this.getHistory();
    if (history.length === 0) return this.addRoll(rollState);

    const lastIdx = history.length - 1;
    history[lastIdx].rolls = [...rollState.rolls];
    history[lastIdx].successes = rollState.successes;
    history[lastIdx].tenCount = rollState.tenCount;
    history[lastIdx].botchCount = rollState.botchCount;
    history[lastIdx].netSuccesses = rollState.netSuccesses;
    history[lastIdx].isBotch = rollState.isBotch;
    history[lastIdx].hasRerolled = true;
    history[lastIdx].rerolledIndices = rollState.rerolledIndices ? [...rollState.rerolledIndices] : [];

    this.saveHistory(history);
    this.renderHistory();
  },

  clearHistory() {
    if (AppState.activeCharacter) {
      AppState.activeCharacter.roll_history = [];
      AppState.saveToStorage();
    }
    this.updateBadgeCount();
    this.renderHistory();
    showToast('Histórico de rolagens deste personagem limpo!', 'info');
  },

  updateBadgeCount() {
    const countEl = document.getElementById('history-roll-count');
    const totalTag = document.getElementById('history-total-tag');
    const history = this.getHistory();
    if (countEl) countEl.textContent = history.length;
    if (totalTag) totalTag.textContent = `${history.length} rolagem${history.length === 1 ? '' : 'ns'} gravada${history.length === 1 ? '' : 's'}`;
  },

  renderHistory() {
    const listEl = document.getElementById('dice-history-list');
    if (!listEl) return;
    const history = this.getHistory();
    this.updateBadgeCount();

    if (history.length === 0) {
      listEl.innerHTML = `
        <div class="history-empty-state">
          <span class="history-empty-icon">🎲</span>
          <span class="history-empty-text">Nenhuma rolagem registrada ainda.</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">As rolagens feitas aparecerão aqui automaticamente!</span>
        </div>
      `;
      return;
    }

    listEl.innerHTML = '';
    history.forEach(item => {
      const card = document.createElement('div');
      card.className = 'history-item-card';

      let outcomeText = '';
      let outcomeClass = 'outcome-failure';

      if (item.tenCount > 0 && item.netSuccesses > 0) {
        outcomeText = `💎 ${item.netSuccesses} Suc (${item.tenCount}x 10)`;
        outcomeClass = 'outcome-crit';
        card.classList.add('has-crit');
      } else if (item.netSuccesses > 0) {
        outcomeText = `🟢 ${item.netSuccesses} Sucesso${item.netSuccesses > 1 ? 's' : ''}`;
        outcomeClass = 'outcome-success';
        card.classList.add('has-success');
      } else if (item.isBotch) {
        outcomeText = `💥 Falha Crítica (${item.botchCount}x '1')`;
        outcomeClass = 'outcome-botch';
        card.classList.add('has-botch');
      } else {
        outcomeText = '⚪ Falha Simples';
        outcomeClass = 'outcome-failure';
      }

      const rerollBadge = item.hasRerolled ? '<span style="color: var(--gold-bright); font-size: 0.72rem; font-weight: bold; margin-left: 4px;">[Falhas Reroladas]</span>' : '';

      const diceHtml = item.rolls.map((r, idx) => {
        let cls = 'mini-die';
        if (r === 10) cls += ' die-ten';
        else if (r >= item.difficulty) cls += ' die-success';
        else if (r === 1) cls += ' die-botch';
        if (item.rerolledIndices && item.rerolledIndices.includes(idx)) {
          cls += ' die-rerolled';
        }
        return `<span class="${cls}" title="${r}${item.rerolledIndices && item.rerolledIndices.includes(idx) ? ' (Rerolado)' : ''}">${r}</span>`;
      }).join('');

      card.innerHTML = `
        <div class="history-card-top">
          <span class="history-char-name">👤 ${item.charName}</span>
          <span class="history-timestamp">⏱️ ${item.time}</span>
        </div>
        <div class="history-traits-line">🎲 ${item.traitsSummary} ${rerollBadge}</div>
        <div class="history-meta-line">
          <span class="history-diff-tag">Dif ${item.difficulty} • ${item.totalPool} dados</span>
          <span class="history-outcome-badge ${outcomeClass}">${outcomeText}</span>
        </div>
        <div class="history-dice-row">${diceHtml}</div>
      `;

      listEl.appendChild(card);
    });

    // Auto-scroll para o final (rolagens mais recentes)
    setTimeout(() => {
      listEl.scrollTop = listEl.scrollHeight;
    }, 20);
  }
};

function getNextDamageState(currentState) {
  const currentIndex = DAMAGE_CYCLE.indexOf(currentState);
  if (currentIndex === -1 || currentIndex === DAMAGE_CYCLE.length - 1) return DAMAGE_CYCLE[0];
  return DAMAGE_CYCLE[currentIndex + 1];
}

// LOGICA DE ROLAGEM COM A REGRA: '10' VALE 2 SUCESSOS E '1' TIRA 1 SUCESSO
function executeDiceRoll() {
  const totalPool = LinkCableSystem.selectedNodes.reduce((acc, curr) => acc + (parseInt(curr.value, 10) || 0), 0);
  if (totalPool <= 0) {
    showToast('A parada de dados está zerada! Selecione traços com valor maior que 0.', 'danger');
    return;
  }

  const diffSelect = document.getElementById('dock-difficulty');
  const difficulty = diffSelect ? parseInt(diffSelect.value, 10) || 6 : 6;

  const rolls = [];
  let successes = 0;
  let tenCount = 0;
  let botchCount = 0;

  for (let i = 0; i < totalPool; i++) {
    const d = Math.floor(Math.random() * 10) + 1;
    rolls.push(d);
    
    // REGRA DO 10: Vale 2 sucessos
    if (d === 10) {
      successes += 2;
      tenCount++;
    } else if (d >= difficulty) {
      successes += 1;
    }

    // REGRA DO 1: Cancela 1 sucesso
    if (d === 1) {
      botchCount++;
    }
  }

  const netSuccesses = successes - botchCount;
  const traitsSummary = LinkCableSystem.selectedNodes.map(n => n.label).join(' + ');
  const mathStr = LinkCableSystem.selectedNodes.map(n => `${n.label} (${n.value})`).join(' + ');

  let outcomeBadgeText = '';
  let isBotch = false;
  if (netSuccesses > 0) {
    outcomeBadgeText = `${netSuccesses} Sucesso${netSuccesses > 1 ? 's' : ''}!`;
  } else if (netSuccesses === 0) {
    outcomeBadgeText = 'Falha Simples (0 Sucessos Líquidos)';
  } else {
    if (botchCount > 0 && successes === 0) {
      outcomeBadgeText = `💥 FALHA CRÍTICA! (${botchCount}x '1')`;
      isBotch = true;
    } else {
      outcomeBadgeText = 'Falha (Cancelado por 1s)';
    }
  }

  // Atualiza estado global da rolagem atual
  currentRollState.char = AppState.activeCharacter;
  currentRollState.totalPool = totalPool;
  currentRollState.difficulty = difficulty;
  currentRollState.rolls = rolls;
  currentRollState.traitsSummary = traitsSummary;
  currentRollState.mathStr = mathStr;
  currentRollState.successes = successes;
  currentRollState.tenCount = tenCount;
  currentRollState.botchCount = botchCount;
  currentRollState.netSuccesses = netSuccesses;
  currentRollState.outcomeBadgeText = outcomeBadgeText;
  currentRollState.isBotch = isBotch;
  currentRollState.hasRerolled = false;
  currentRollState.rerolledIndices = [];
  currentRollState.lastDiscordMessageId = null;

  renderDiceResultsUI();

  // Salva no histórico de rolagens
  DiceHistoryManager.addRoll(currentRollState);

  // Dispara envio inicial para o Discord Webhook
  DiscordIntegration.sendRoll(currentRollState);
}

function rerollFailures() {
  if (currentRollState.hasRerolled) {
    showToast('Você já rerrolou as falhas desta rolagem (permitido apenas 1x)!', 'info');
    return;
  }

  const failureIndices = [];
  currentRollState.rolls.forEach((r, idx) => {
    if (r < currentRollState.difficulty) {
      failureIndices.push(idx);
    }
  });

  if (failureIndices.length === 0) {
    showToast('Não há dados que falharam para rerrolar!', 'info');
    return;
  }

  currentRollState.hasRerolled = true;
  currentRollState.rerolledIndices = [...failureIndices];

  // Rerrola cada dado que falhou
  failureIndices.forEach(idx => {
    currentRollState.rolls[idx] = Math.floor(Math.random() * 10) + 1;
  });

  // Recalcula sucessos
  let successes = 0;
  let tenCount = 0;
  let botchCount = 0;

  currentRollState.rolls.forEach(d => {
    if (d === 10) {
      successes += 2;
      tenCount++;
    } else if (d >= currentRollState.difficulty) {
      successes += 1;
    }
    if (d === 1) {
      botchCount++;
    }
  });

  const netSuccesses = successes - botchCount;
  let outcomeBadgeText = '';
  let isBotch = false;

  if (netSuccesses > 0) {
    outcomeBadgeText = `${netSuccesses} Sucesso${netSuccesses > 1 ? 's' : ''}!`;
  } else if (netSuccesses === 0) {
    outcomeBadgeText = 'Falha Simples (0 Sucessos Líquidos)';
  } else {
    if (botchCount > 0 && successes === 0) {
      outcomeBadgeText = `💥 FALHA CRÍTICA! (${botchCount}x '1')`;
      isBotch = true;
    } else {
      outcomeBadgeText = 'Falha (Cancelado por 1s)';
    }
  }

  currentRollState.successes = successes;
  currentRollState.tenCount = tenCount;
  currentRollState.botchCount = botchCount;
  currentRollState.netSuccesses = netSuccesses;
  currentRollState.outcomeBadgeText = outcomeBadgeText;
  currentRollState.isBotch = isBotch;

  renderDiceResultsUI();

  // Atualiza histórico com a rerrolagem
  DiceHistoryManager.updateLastRoll(currentRollState);

  // Edita a mensagem anterior no Discord via PATCH Webhook
  DiscordIntegration.editLastRoll(currentRollState);
}

function renderDiceResultsUI() {
  const resultsContainer = document.getElementById('dock-dice-results');
  const outcomeBadge = document.getElementById('dice-outcome-badge');
  const summaryText = document.getElementById('dice-summary-text');
  const diceList = document.getElementById('dice-rendered-list');
  const btnReroll = document.getElementById('btn-reroll-failures');

  if (!resultsContainer || !outcomeBadge || !summaryText || !diceList) return;

  resultsContainer.classList.remove('hidden');
  diceList.innerHTML = '';

  currentRollState.rolls.forEach((r, idx) => {
    const dieEl = document.createElement('div');
    dieEl.className = 'die-box';
    dieEl.textContent = r;

    if (r === 10) {
      dieEl.classList.add('die-ten');
      dieEl.title = 'Resultado 10 (Vale 2 Sucessos!)';
    } else if (r >= currentRollState.difficulty) {
      dieEl.classList.add('die-success');
      dieEl.title = 'Sucesso (>= Dif)';
    } else if (r === 1) {
      dieEl.classList.add('die-botch');
      dieEl.title = 'Resultado 1 (Cancela 1 Sucesso)';
    }

    if (currentRollState.rerolledIndices.includes(idx)) {
      dieEl.classList.add('die-rerolled');
      dieEl.title += ' (Rerolado!)';
    }

    diceList.appendChild(dieEl);
  });

  outcomeBadge.className = 'outcome-badge';
  if (currentRollState.netSuccesses > 0) {
    outcomeBadge.classList.add('outcome-success');
  } else if (currentRollState.netSuccesses === 0) {
    outcomeBadge.classList.add('outcome-failure');
  } else {
    if (currentRollState.isBotch) outcomeBadge.classList.add('outcome-botch');
    else outcomeBadge.classList.add('outcome-failure');
  }
  outcomeBadge.textContent = currentRollState.outcomeBadgeText;

  const tenBonusStr = currentRollState.tenCount > 0 ? ` [${currentRollState.tenCount}x '10' = +${currentRollState.tenCount * 2} suc]` : '';
  const rerollTag = currentRollState.hasRerolled ? ' [Falhas Reroladas]' : '';
  summaryText.textContent = `(${currentRollState.totalPool} d10s contra Dif ${currentRollState.difficulty}${rerollTag} | Brutos: ${currentRollState.successes} ✓${tenBonusStr}, 1s: -${currentRollState.botchCount} ✗)`;

  // Configura o botão de Rerrolar Falhas
  if (btnReroll) {
    const failCount = currentRollState.rolls.filter(r => r < currentRollState.difficulty).length;
    if (!currentRollState.hasRerolled && failCount > 0) {
      btnReroll.classList.remove('hidden');
      btnReroll.disabled = false;
      btnReroll.innerHTML = `<span class="btn-icon">🔄</span> Rerrolar Falhas (${failCount})`;
    } else if (currentRollState.hasRerolled) {
      btnReroll.classList.remove('hidden');
      btnReroll.disabled = true;
      btnReroll.innerHTML = `<span class="btn-icon">✓</span> Falhas Reroladas`;
    } else {
      btnReroll.classList.add('hidden');
    }
  }
}

function setupEventListeners() {
  
  // Modal de Personalização de Tema / Cores
  const themeModal = document.getElementById('theme-customizer-modal');
  const btnOpenThemeModal = document.getElementById('btn-theme-modal');
  const btnCloseThemeModal = document.getElementById('btn-close-theme-modal');
  const btnSaveTheme = document.getElementById('btn-save-theme');
  const btnResetTheme = document.getElementById('btn-reset-theme');

  if (btnOpenThemeModal && themeModal) {
    btnOpenThemeModal.addEventListener('click', () => {
      ThemeManager.updateControlsUI();
      themeModal.classList.remove('hidden');
    });
  }

  if (btnCloseThemeModal && themeModal) {
    btnCloseThemeModal.addEventListener('click', () => {
      themeModal.classList.add('hidden');
    });
  }

  if (themeModal) {
    themeModal.addEventListener('click', (e) => {
      if (e.target === themeModal) themeModal.classList.add('hidden');
    });
  }

  // Presets Rápidos
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.getAttribute('data-preset');
      ThemeManager.applyPreset(presetKey);
      showToast(`Preset "${THEME_PRESETS[presetKey]?.name || presetKey}" aplicado!`, 'info');
    });
  });

  // Sliders em Tempo Real
  const themeSliders = [
    'slider-primary-hue', 'slider-primary-sat',
    'slider-secondary-hue', 'slider-secondary-sat',
    'slider-bg-lightness', 'slider-noise-opacity'
  ];

  themeSliders.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        ThemeManager.updateFromSliders();
      });
    }
  });

  if (btnSaveTheme && themeModal) {
    btnSaveTheme.addEventListener('click', () => {
      ThemeManager.save();
      themeModal.classList.add('hidden');
      showToast('Tema e cores salvas com sucesso!', 'success');
    });
  }

  if (btnResetTheme) {
    btnResetTheme.addEventListener('click', () => {
      ThemeManager.reset();
    });
  }

  // Modal de Configuração do Discord Webhook
  const discordModal = document.getElementById('discord-webhook-modal');
  const btnOpenDiscordModal = document.getElementById('btn-discord-modal');
  const btnCloseDiscordModal = document.getElementById('btn-close-discord-modal');
  const btnSaveDiscordWebhook = document.getElementById('btn-save-discord-webhook');
  const btnTestDiscordWebhook = document.getElementById('btn-test-discord-webhook');
  const discordUrlInput = document.getElementById('discord-webhook-url');
  const discordAutoSendToggle = document.getElementById('discord-auto-send-toggle');
  const emoteCriticoInput = document.getElementById('discord-emote-critico');
  const emoteSucessoInput = document.getElementById('discord-emote-sucesso');
  const emoteFalhaInput = document.getElementById('discord-emote-falha');
  const emoteFalhaCriticaInput = document.getElementById('discord-emote-falhacritica');

  if (btnOpenDiscordModal && discordModal) {
    btnOpenDiscordModal.addEventListener('click', () => {
      const activeChar = AppState.activeCharacter;
      const charName = (activeChar && activeChar.header && activeChar.header.name && activeChar.header.name.trim())
        ? activeChar.header.name.trim()
        : 'Personagem Atual';

      const targetLabel = document.getElementById('discord-modal-target-char');
      if (targetLabel) {
        targetLabel.textContent = `Configurando para: 👤 ${charName}`;
      }

      if (discordUrlInput) discordUrlInput.value = DiscordIntegration.getUrl();
      const emotes = DiscordIntegration.getEmotes();
      if (emoteCriticoInput) emoteCriticoInput.value = emotes.critico || '';
      if (emoteSucessoInput) emoteSucessoInput.value = emotes.sucesso || '';
      if (emoteFalhaInput) emoteFalhaInput.value = emotes.falha || '';
      if (emoteFalhaCriticaInput) emoteFalhaCriticaInput.value = emotes.falhacritica || '';
      discordModal.classList.remove('hidden');
    });
  }

  if (btnCloseDiscordModal && discordModal) {
    btnCloseDiscordModal.addEventListener('click', () => {
      discordModal.classList.add('hidden');
    });
  }

  if (discordModal) {
    discordModal.addEventListener('click', (e) => {
      if (e.target === discordModal) discordModal.classList.add('hidden');
    });
  }

  if (btnSaveDiscordWebhook) {
    btnSaveDiscordWebhook.addEventListener('click', () => {
      if (discordUrlInput) DiscordIntegration.setUrl(discordUrlInput.value);
      
      DiscordIntegration.setEmotes({
        critico: emoteCriticoInput ? (emoteCriticoInput.value.trim() || '<:critico:1540580738007695512>') : '<:critico:1540580738007695512>',
        sucesso: emoteSucessoInput ? (emoteSucessoInput.value.trim() || '<:sucesso:1540580820127842344>') : '<:sucesso:1540580820127842344>',
        falha: emoteFalhaInput ? (emoteFalhaInput.value.trim() || '<:falha:1540580800456691773>') : '<:falha:1540580800456691773>',
        falhacritica: emoteFalhaCriticaInput ? (emoteFalhaCriticaInput.value.trim() || '<:falhacritica:1540580772652523600>') : '<:falhacritica:1540580772652523600>'
      });

      if (discordModal) discordModal.classList.add('hidden');
      showToast('Configurações do Discord salvas para este personagem!', 'success');
    });
  }

  if (btnTestDiscordWebhook) {
    btnTestDiscordWebhook.addEventListener('click', () => {
      if (discordUrlInput) DiscordIntegration.setUrl(discordUrlInput.value);
      DiscordIntegration.sendTestMessage();
    });
  }

  // Drawer de Histórico de Rolagens
  const historyDrawer = document.getElementById('dice-history-drawer');
  const btnOpenHistory = document.getElementById('btn-open-dice-history');
  const btnCloseHistory = document.getElementById('btn-close-dice-history');
  const btnClearHistory = document.getElementById('btn-clear-dice-history');

  if (btnOpenHistory && historyDrawer) {
    btnOpenHistory.addEventListener('click', () => {
      DiceHistoryManager.renderHistory();
      historyDrawer.classList.remove('hidden');
    });
  }

  if (btnCloseHistory && historyDrawer) {
    btnCloseHistory.addEventListener('click', () => {
      historyDrawer.classList.add('hidden');
    });
  }

  if (historyDrawer) {
    historyDrawer.addEventListener('click', (e) => {
      if (e.target === historyDrawer) historyDrawer.classList.add('hidden');
    });
  }

  if (btnClearHistory) {
    btnClearHistory.addEventListener('click', () => {
      if (confirm('Deseja realmente limpar todo o histórico de rolagens gravado?')) {
        DiceHistoryManager.clearHistory();
      }
    });
  }

  // Drawer de Ajuda & Wiki V20 (Lado Esquerdo)
  const btnOpenWiki = document.getElementById('btn-open-wiki-help');
  const btnCloseWiki = document.getElementById('btn-close-wiki-help');
  const wikiDrawer = document.getElementById('wiki-help-drawer');
  const wikiSearchInput = document.getElementById('wiki-search-input');

  if (btnOpenWiki && wikiDrawer) {
    btnOpenWiki.addEventListener('click', () => {
      wikiDrawer.classList.remove('hidden');
      if (wikiSearchInput) {
        setTimeout(() => wikiSearchInput.focus(), 50);
      }
    });
  }

  if (btnCloseWiki && wikiDrawer) {
    btnCloseWiki.addEventListener('click', () => {
      wikiDrawer.classList.add('hidden');
    });
  }

  if (wikiDrawer) {
    wikiDrawer.addEventListener('click', (e) => {
      if (e.target === wikiDrawer) wikiDrawer.classList.add('hidden');
    });
  }

  if (wikiSearchInput) {
    wikiSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll('.wiki-link-card, .wiki-card-info');
      const sections = document.querySelectorAll('.wiki-section');

      items.forEach(item => {
        const text = (item.getAttribute('data-search-text') || '') + ' ' + (item.innerText || '');
        if (!q || text.toLowerCase().includes(q)) {
          item.classList.remove('wiki-item-hidden');
        } else {
          item.classList.add('wiki-item-hidden');
        }
      });

      sections.forEach(sec => {
        const visibleChild = sec.querySelector('.wiki-link-card:not(.wiki-item-hidden), .wiki-card-info:not(.wiki-item-hidden)');
        if (!q || visibleChild) {
          sec.classList.remove('wiki-item-hidden');
        } else {
          sec.classList.add('wiki-item-hidden');
        }
      });
    });
  }

  // Abas de Página
  const tabBtns = document.querySelectorAll('.tab-nav-btn');
  const page1 = document.getElementById('page-1');
  const page2 = document.getElementById('page-2');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.getAttribute('data-tab');
      if (targetTab === 'page-1') {
        if (page1) page1.classList.remove('hidden-page');
        if (page2) page2.classList.add('hidden-page');
      } else if (targetTab === 'page-2') {
        if (page1) page1.classList.add('hidden-page');
        if (page2) page2.classList.remove('hidden-page');
      } else {
        if (page1) page1.classList.remove('hidden-page');
        if (page2) page2.classList.remove('hidden-page');
      }
      setTimeout(() => LinkCableSystem.updateWebLines(), 50);
    });
  });

  // Botão Resetar Layout das Janelas
  const btnResetLayout = document.getElementById('btn-reset-layout');
  if (btnResetLayout) {
    btnResetLayout.addEventListener('click', () => {
      DraggableWindowManager.resetPositions();
    });
  }

  // Foto de Perfil do Personagem (Upload, URL, Remoção)
  const avatarInput = document.getElementById('char-avatar-input');
  const avatarFrame = document.getElementById('char-avatar-frame');
  const btnAvatarUrl = document.getElementById('btn-avatar-url');
  const btnAvatarRemove = document.getElementById('btn-avatar-remove');

  if (avatarInput) {
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        showToast('Por favor, selecione um arquivo de imagem válido (PNG, JPG, etc).', 'danger');
        return;
      }

      const reader = new FileReader();
      reader.onload = async (event) => {
        if (AppState.activeCharacter) {
          if (!AppState.activeCharacter.header) AppState.activeCharacter.header = {};
          AppState.activeCharacter.header.avatar = event.target.result;
          AppState.activeCharacter.header.avatarUrl = '';
          AppState.saveToStorage();
          UIRenderer.renderAvatar(AppState.activeCharacter);
          showToast('Foto de perfil atualizada com sucesso!', 'success');

          // Hospeda em segundo plano para o Discord usar como thumbnail sem anexo grande
          const hosted = await uploadImageToHost(file);
          if (hosted && AppState.activeCharacter && AppState.activeCharacter.header) {
            AppState.activeCharacter.header.avatarUrl = hosted;
            AppState.saveToStorage();
          }
        }
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    });
  }

  if (avatarFrame) {
    avatarFrame.addEventListener('click', () => {
      if (avatarInput) avatarInput.click();
    });
  }

  if (btnAvatarUrl) {
    btnAvatarUrl.addEventListener('click', () => {
      const currentUrl = (AppState.activeCharacter && AppState.activeCharacter.header && AppState.activeCharacter.header.avatar && AppState.activeCharacter.header.avatar.startsWith('http')) ? AppState.activeCharacter.header.avatar : '';
      const inputUrl = prompt('Cole o link direto (URL) da imagem de perfil:', currentUrl);
      if (inputUrl !== null) {
        if (!AppState.activeCharacter.header) AppState.activeCharacter.header = {};
        AppState.activeCharacter.header.avatar = inputUrl.trim();
        AppState.activeCharacter.header.avatarUrl = inputUrl.trim();
        AppState.saveToStorage();
        UIRenderer.renderAvatar(AppState.activeCharacter);
        showToast('Foto de perfil vinculada via URL!', 'success');
      }
    });
  }

  if (btnAvatarRemove) {
    btnAvatarRemove.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Deseja remover a foto de perfil deste personagem?')) {
        if (AppState.activeCharacter && AppState.activeCharacter.header) {
          AppState.activeCharacter.header.avatar = '';
          AppState.activeCharacter.header.avatarUrl = '';
          AppState.saveToStorage();
          UIRenderer.renderAvatar(AppState.activeCharacter);
          showToast('Foto de perfil removida.', 'info');
        }
      }
    });
  }

  // Inputs
  document.addEventListener('input', (e) => {
    const target = e.target;
    const bindPath = target.getAttribute('data-bind');
    if (bindPath && AppState.activeCharacter) {
      let val = target.value;
      if (target.type === 'number') val = parseInt(val, 10) || 0;
      setNestedValue(AppState.activeCharacter, bindPath, val);
      AppState.saveToStorage();

      if (bindPath === 'header.name' || bindPath === 'header.clan' || bindPath === 'header.generation') {
        UIRenderer.updateDropdown();
        if (bindPath === 'header.generation') {
          syncBloodPoolWithGeneration(AppState.activeCharacter);
          UIRenderer.renderBloodPool(AppState.activeCharacter);
        }
      }

      if (bindPath === 'xp.total' || bindPath === 'xp.spent') {
        UIRenderer.updateXPCalculation(AppState.activeCharacter);
      }
    }
  });

  document.addEventListener('change', (e) => {
    const target = e.target;
    const bindPath = target.getAttribute('data-bind');
    if (bindPath === 'header.generation' && AppState.activeCharacter) {
      const val = target.value;
      setNestedValue(AppState.activeCharacter, bindPath, val);
      syncBloodPoolWithGeneration(AppState.activeCharacter);
      AppState.saveToStorage();
      UIRenderer.updateDropdown();
      UIRenderer.renderBloodPool(AppState.activeCharacter);
      const rule = getGenerationRule(val);
      showToast(`Geração alterada para ${rule.label} (Max Sangue: ${rule.maxBlood} pts)!`, 'info');
    }
  });

  const charSelect = document.getElementById('character-select');
  if (charSelect) {
    charSelect.addEventListener('change', (e) => {
      const selectedId = e.target.value;
      if (AppState.setActive(selectedId)) {
        UIRenderer.renderAll();
        showToast(`Ficha "${AppState.activeCharacter.header.name || 'Personagem'}" carregada!`, 'info');
      }
    });
  }

  const btnNew = document.getElementById('btn-new');
  if (btnNew) {
    btnNew.addEventListener('click', () => {
      const newName = prompt('Digite o nome do novo personagem:', 'Novo Neófito');
      if (newName !== null) {
        const newChar = createBlankCharacter(newName.trim() || 'Novo Personagem');
        AppState.addCharacter(newChar);
        UIRenderer.renderAll();
        showToast('Nova ficha criada com sucesso!', 'success');
      }
    });
  }

  const btnSave = document.getElementById('btn-save');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      AppState.saveToStorage();
      UIRenderer.updateDropdown();
      showToast('Ficha salva no navegador com sucesso!', 'success');
    });
  }

  const btnDuplicate = document.getElementById('btn-duplicate');
  if (btnDuplicate) {
    btnDuplicate.addEventListener('click', () => {
      const cloned = AppState.duplicateActive();
      if (cloned) {
        UIRenderer.renderAll();
        showToast(`Ficha duplicada como "${cloned.header.name}"!`, 'success');
      }
    });
  }

  const btnDelete = document.getElementById('btn-delete');
  if (btnDelete) {
    btnDelete.addEventListener('click', () => {
      const name = AppState.activeCharacter.header.name || 'este personagem';
      if (confirm(`Tem certeza de que deseja excluir a ficha de "${name}"?`)) {
        AppState.deleteActive();
        UIRenderer.renderAll();
        showToast('Ficha excluída com sucesso.', 'danger');
      }
    });
  }

  // Botões Adicionar Traços
  const btnAddDisc = document.getElementById('btn-add-discipline');
  if (btnAddDisc) {
    btnAddDisc.addEventListener('click', () => {
      if (!AppState.activeCharacter.disciplines) AppState.activeCharacter.disciplines = [];
      AppState.activeCharacter.disciplines.push({ id: generateUniqueId(), name: '', level: 1 });
      AppState.saveToStorage();
      UIRenderer.renderDynamicDisciplines(AppState.activeCharacter);
    });
  }

  const btnAddSpec = document.getElementById('btn-add-specialization');
  if (btnAddSpec) {
    btnAddSpec.addEventListener('click', () => {
      if (!AppState.activeCharacter.specializations) AppState.activeCharacter.specializations = [];
      AppState.activeCharacter.specializations.push({ id: generateUniqueId(), name: '', level: 1 });
      AppState.saveToStorage();
      UIRenderer.renderDynamicSpecializations(AppState.activeCharacter);
    });
  }

  const btnAddBg = document.getElementById('btn-add-background');
  if (btnAddBg) {
    btnAddBg.addEventListener('click', () => {
      if (!AppState.activeCharacter.backgrounds) AppState.activeCharacter.backgrounds = [];
      AppState.activeCharacter.backgrounds.push({ id: generateUniqueId(), name: '', level: 1 });
      AppState.saveToStorage();
      UIRenderer.renderDynamicBackgrounds(AppState.activeCharacter);
    });
  }

  const btnAddPath = document.getElementById('btn-add-path');
  if (btnAddPath) {
    btnAddPath.addEventListener('click', () => {
      if (!AppState.activeCharacter.paths) AppState.activeCharacter.paths = [];
      AppState.activeCharacter.paths.push({ id: generateUniqueId(), name: '', level: 1 });
      AppState.saveToStorage();
      UIRenderer.renderDynamicPaths(AppState.activeCharacter);
    });
  }

  const btnAddRitual = document.getElementById('btn-add-ritual');
  if (btnAddRitual) {
    btnAddRitual.addEventListener('click', () => {
      if (!AppState.activeCharacter.rituals_list) AppState.activeCharacter.rituals_list = [];
      AppState.activeCharacter.rituals_list.push({ id: generateUniqueId(), level: 1, name: '', description: '' });
      AppState.saveToStorage();
      UIRenderer.renderDynamicRituals(AppState.activeCharacter);
    });
  }

  // Sangue & Vitalidade
  const btnBloodFill = document.getElementById('btn-blood-fill-all');
  if (btnBloodFill) {
    btnBloodFill.addEventListener('click', () => {
      const total = AppState.activeCharacter.status.blood_pool.length;
      AppState.activeCharacter.status.blood_pool = Array(total).fill(true);
      AppState.saveToStorage();
      UIRenderer.renderBloodPool(AppState.activeCharacter);
      showToast(`Reserva de Sangue preenchida (${total}/${total})!`, 'success');
    });
  }

  const btnBloodClear = document.getElementById('btn-blood-clear-all');
  if (btnBloodClear) {
    btnBloodClear.addEventListener('click', () => {
      const total = AppState.activeCharacter.status.blood_pool.length;
      AppState.activeCharacter.status.blood_pool = Array(total).fill(false);
      AppState.saveToStorage();
      UIRenderer.renderBloodPool(AppState.activeCharacter);
      showToast('Reserva de Sangue esvaziada (0).', 'info');
    });
  }

  const btnHealthClear = document.getElementById('btn-health-clear-all');
  if (btnHealthClear) {
    btnHealthClear.addEventListener('click', () => {
      AppState.activeCharacter.health = { bruised: '', hurt: '', injured: '', wounded: '', mauled: '', crippled: '', incapacitated: '' };
      AppState.saveToStorage();
      UIRenderer.renderHealthTrack(AppState.activeCharacter);
      showToast('Todos os ferimentos foram curados!', 'success');
    });
  }

  const btnClearLinks = document.getElementById('btn-clear-links');
  if (btnClearLinks) btnClearLinks.addEventListener('click', () => LinkCableSystem.clear());

  const btnCopyCmd = document.getElementById('btn-copy-command');
  if (btnCopyCmd) {
    btnCopyCmd.addEventListener('click', () => {
      const input = document.getElementById('dock-command-input');
      if (input && input.value) {
        navigator.clipboard.writeText(input.value).then(() => {
          showToast(`Comando "${input.value}" copiado!`, 'success');
        }).catch(() => {
          input.select();
          document.execCommand('copy');
          showToast(`Comando "${input.value}" copiado!`, 'success');
        });
      }
    });
  }

  const btnRollDice = document.getElementById('btn-roll-dice');
  if (btnRollDice) btnRollDice.addEventListener('click', executeDiceRoll);

  const btnRerollFailures = document.getElementById('btn-reroll-failures');
  if (btnRerollFailures) btnRerollFailures.addEventListener('click', rerollFailures);

  const btnExport = document.getElementById('btn-export-json');
  if (btnExport) btnExport.addEventListener('click', exportCharacterToJson);

  const importInput = document.getElementById('import-json-input');
  if (importInput) importInput.addEventListener('change', handleJsonImport);

  const btnPrint = document.getElementById('btn-print');
  if (btnPrint) btnPrint.addEventListener('click', () => window.print());

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      AppState.saveToStorage();
      UIRenderer.updateDropdown();
      showToast('Ficha salva! (Ctrl+S)', 'success');
    } else if (e.key === 'Escape') {
      const wikiDrawer = document.getElementById('wiki-help-drawer');
      const historyDrawer = document.getElementById('dice-history-drawer');
      const themeModal = document.getElementById('theme-customizer-modal');
      const discordModal = document.getElementById('discord-modal');
      if (wikiDrawer) wikiDrawer.classList.add('hidden');
      if (historyDrawer) historyDrawer.classList.add('hidden');
      if (themeModal) themeModal.classList.add('hidden');
      if (discordModal) discordModal.classList.add('hidden');
    }
  });

  window.addEventListener('scroll', () => LinkCableSystem.updateWebLines(), { passive: true });
  window.addEventListener('resize', () => LinkCableSystem.updateWebLines());
}

function exportCharacterToJson() {
  const char = AppState.activeCharacter;
  if (!char) return;

  const rawName = (char.header && char.header.name && char.header.name.trim()) ? char.header.name.trim() : 'Personagem';
  const cleanName = rawName.replace(/[^a-zA-Z0-9_\u00C0-\u00FF-]/g, '_');
  const filename = `${cleanName}_V20.json`;

  const jsonString = JSON.stringify(char, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);

  showToast(`Arquivo "${filename}" exportado com sucesso!`, 'success');
}

function handleJsonImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsedData = JSON.parse(e.target.result);
      if (!parsedData || typeof parsedData !== 'object' || !parsedData.header) {
        throw new Error('Arquivo JSON inválido para a ficha V20.');
      }

      parsedData.id = generateUniqueId();
      if (!Array.isArray(parsedData.disciplines)) parsedData.disciplines = [];
      if (!Array.isArray(parsedData.specializations)) parsedData.specializations = [];
      if (!Array.isArray(parsedData.backgrounds)) parsedData.backgrounds = [];
      if (!Array.isArray(parsedData.paths)) parsedData.paths = [];
      if (!Array.isArray(parsedData.rituals_list)) parsedData.rituals_list = [];
      if (!parsedData.status) parsedData.status = {};
      if (!parsedData.notes) parsedData.notes = {};
      if (!Array.isArray(parsedData.status.willpower_temp)) parsedData.status.willpower_temp = Array(10).fill(false);
      
      syncBloodPoolWithGeneration(parsedData);

      AppState.addCharacter(parsedData);
      UIRenderer.renderAll();
      showToast(`Ficha "${parsedData.header.name || 'Importada'}" importada com sucesso!`, 'success');
    } catch (err) {
      console.error('Erro ao importar JSON:', err);
      showToast('Erro ao importar JSON: arquivo corrompido ou incompatível.', 'danger');
    } finally {
      event.target.value = '';
    }
  };

  reader.readAsText(file);
}

document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  AppState.init();
  UIRenderer.renderAll();
  DraggableWindowManager.init();
  setupEventListeners();
  DiceHistoryManager.updateBadgeCount();
  console.log('Ficha V20 Automatizada (Histórico + Temas + Noise + Regra de 10s e 1s) pronta.');
});
