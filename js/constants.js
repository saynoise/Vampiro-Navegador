/**
 * FICHA DE PERSONAGEM V20 - CONSTANTES E UTILITÁRIOS
 * Regras de Geração, Vitalidade, Dano, IDs e Manipulação de Objetos
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

function getNextDamageState(currentState) {
  const currentIndex = DAMAGE_CYCLE.indexOf(currentState);
  if (currentIndex === -1 || currentIndex === DAMAGE_CYCLE.length - 1) return DAMAGE_CYCLE[0];
  return DAMAGE_CYCLE[currentIndex + 1];
}