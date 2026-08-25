/**
 * FICHA DE PERSONAGEM V20 - MOTOR DE DADOS, HISTÓRICO E DISCORD WEBHOOK
 * Regra do 10 (2 sucessos) e 1 (cancela 1), Histórico e Webhook
 */

'use strict';

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
          <span class="history-char-name">👤 ${escapeHtml(item.charName)}</span>
          <span class="history-timestamp">⏱️ ${escapeHtml(item.time)}</span>
        </div>
        <div class="history-traits-line">🎲 ${escapeHtml(item.traitsSummary)} ${rerollBadge}</div>
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