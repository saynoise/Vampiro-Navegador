/**
 * FICHA DE PERSONAGEM V20 - PONTO DE ENTRADA PRINCIPAL E EVENTOS DA UI
 * Inicialização dos Módulos, Atalhos de Teclado e Sincronização
 */

'use strict';

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

  // Dropdown de Presets
  const presetThemeSelect = document.getElementById('preset-theme-select');
  if (presetThemeSelect) {
    presetThemeSelect.addEventListener('change', (e) => {
      const presetKey = e.target.value;
      if (THEME_PRESETS[presetKey]) {
        ThemeManager.applyPreset(presetKey);
        showToast(`Tema "${THEME_PRESETS[presetKey].name}" aplicado!`, 'info');
      }
    });
  }

  // Cards de Clã e Botões de Preset
  document.querySelectorAll('.clan-preset-card, .preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.getAttribute('data-preset');
      if (THEME_PRESETS[presetKey]) {
        ThemeManager.applyPreset(presetKey);
        showToast(`Tema "${THEME_PRESETS[presetKey].name}" aplicado!`, 'info');
      }
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
  const mobileStickyBtnHistory = document.getElementById('mobile-sticky-btn-history');
  const btnCloseHistory = document.getElementById('btn-close-dice-history');
  const btnClearHistory = document.getElementById('btn-clear-dice-history');

  const openHistory = () => {
    DiceHistoryManager.renderHistory();
    if (historyDrawer) historyDrawer.classList.remove('hidden');
    document.body.classList.add('drawer-open');
  };

  const closeHistory = () => {
    if (historyDrawer) historyDrawer.classList.add('hidden');
    document.body.classList.remove('drawer-open');
  };

  if (btnOpenHistory && historyDrawer) {
    btnOpenHistory.addEventListener('click', openHistory);
  }

  if (mobileStickyBtnHistory && historyDrawer) {
    mobileStickyBtnHistory.addEventListener('click', openHistory);
  }

  if (btnCloseHistory && historyDrawer) {
    btnCloseHistory.addEventListener('click', closeHistory);
  }

  if (historyDrawer) {
    historyDrawer.addEventListener('click', (e) => {
      if (e.target === historyDrawer) closeHistory();
    });

    const historyPanel = historyDrawer.querySelector('.history-drawer-panel');
    if (historyPanel) {
      let touchStartX = 0;
      let touchStartY = 0;
      let currentDeltaX = 0;
      let isHorizontalSwipe = false;

      historyPanel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        currentDeltaX = 0;
        isHorizontalSwipe = false;
      }, { passive: true });

      historyPanel.addEventListener('touchmove', (e) => {
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = currentX - touchStartX;
        const diffY = currentY - touchStartY;

        if (!isHorizontalSwipe && Math.abs(diffX) > 10 && Math.abs(diffX) > Math.abs(diffY)) {
          isHorizontalSwipe = true;
        }

        if (isHorizontalSwipe && diffX > 0) {
          currentDeltaX = diffX;
          historyPanel.style.transform = `translateX(${diffX}px)`;
          historyPanel.style.transition = 'none';
        }
      }, { passive: true });

      historyPanel.addEventListener('touchend', () => {
        if (isHorizontalSwipe && currentDeltaX > 60) {
          historyPanel.style.transition = 'transform 0.2s ease';
          historyPanel.style.transform = 'translateX(100%)';
          setTimeout(() => {
            closeHistory();
            historyPanel.style.transform = '';
            historyPanel.style.transition = '';
          }, 200);
        } else if (isHorizontalSwipe) {
          historyPanel.style.transition = 'transform 0.2s ease';
          historyPanel.style.transform = 'translateX(0)';
          setTimeout(() => {
            historyPanel.style.transform = '';
            historyPanel.style.transition = '';
          }, 200);
        }
      });
    }
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
  const mobileStickyBtnWiki = document.getElementById('mobile-sticky-btn-wiki');
  const btnCloseWiki = document.getElementById('btn-close-wiki-help');
  const wikiDrawer = document.getElementById('wiki-help-drawer');
  const wikiSearchInput = document.getElementById('wiki-search-input');

  const openWiki = () => {
    if (wikiDrawer) {
      wikiDrawer.classList.remove('hidden');
      document.body.classList.add('drawer-open');
      if (wikiSearchInput) setTimeout(() => wikiSearchInput.focus(), 50);
    }
  };

  const closeWiki = () => {
    if (wikiDrawer) wikiDrawer.classList.add('hidden');
    document.body.classList.remove('drawer-open');
  };

  if (btnOpenWiki && wikiDrawer) {
    btnOpenWiki.addEventListener('click', openWiki);
  }

  if (mobileStickyBtnWiki && wikiDrawer) {
    mobileStickyBtnWiki.addEventListener('click', openWiki);
  }

  if (btnCloseWiki && wikiDrawer) {
    btnCloseWiki.addEventListener('click', closeWiki);
  }

  if (wikiDrawer) {
    wikiDrawer.addEventListener('click', (e) => {
      if (e.target === wikiDrawer) closeWiki();
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

  // Botão de Travar/Destravar Edição de Bolinhas
  const btnToggleLock = document.getElementById('btn-toggle-lock');
  const lockIcon = document.getElementById('lock-icon');
  const lockText = document.getElementById('lock-text');
  
  let isTraitsLocked = localStorage.getItem('v20_traits_locked') === 'true';
  
  const updateLockState = () => {
    if (isTraitsLocked) {
      document.body.classList.add('traits-locked');
      if (lockIcon) lockIcon.textContent = '🔒';
      if (lockText) lockText.textContent = 'Travado';
      if (btnToggleLock) {
        btnToggleLock.classList.add('btn-primary');
        btnToggleLock.classList.remove('btn-outline');
      }
    } else {
      document.body.classList.remove('traits-locked');
      if (lockIcon) lockIcon.textContent = '🔓';
      if (lockText) lockText.textContent = 'Edição Livre';
      if (btnToggleLock) {
        btnToggleLock.classList.remove('btn-primary');
        btnToggleLock.classList.add('btn-outline');
      }
    }
  };

  if (btnToggleLock) {
    btnToggleLock.addEventListener('click', () => {
      isTraitsLocked = !isTraitsLocked;
      localStorage.setItem('v20_traits_locked', isTraitsLocked);
      updateLockState();
    });
  }
  updateLockState();

    // Foto de Perfil do Personagem (Upload, URL, Remoção)
  const avatarInput = document.getElementById('char-avatar-input');
  const avatarFrame = document.getElementById('char-avatar-frame');
  const btnAvatarUrl = document.getElementById('btn-avatar-url');
  const btnAvatarRemove = document.getElementById('btn-avatar-remove');

  if (avatarInput) {
    avatarInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        showToast('Por favor, selecione um arquivo de imagem válido (PNG, JPG, etc).', 'danger');
        return;
      }

      try {
        // Reduz a imagem automaticamente para ~30KB antes de salvar no armazenamento
        const compressedBase64 = await compressImage(file, 400, 400, 0.85);

        if (AppState.activeCharacter) {
          if (!AppState.activeCharacter.header) AppState.activeCharacter.header = {};
          AppState.activeCharacter.header.avatar = compressedBase64;
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
      } catch (err) {
        console.error('Erro ao processar imagem de avatar:', err);
        showToast('Erro ao processar imagem de perfil.', 'danger');
      } finally {
        e.target.value = '';
      }
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
    btnAvatarRemove.addEventListener('click', () => {
      if (confirm('Deseja realmente remover a foto de perfil?')) {
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
      const discordModal = document.getElementById('discord-webhook-modal');
      const ritualsWipModal = document.getElementById('rituals-wip-modal');
      if (wikiDrawer) wikiDrawer.classList.add('hidden');
      if (historyDrawer) historyDrawer.classList.add('hidden');
      if (themeModal) themeModal.classList.add('hidden');
      if (discordModal) discordModal.classList.add('hidden');
      if (ritualsWipModal) ritualsWipModal.classList.add('hidden');
      document.body.classList.remove('drawer-open');
    }
  });

  const mobileStickyBar = document.getElementById('mobile-sticky-toolbar');
  window.addEventListener('scroll', () => {
    LinkCableSystem.updateWebLines();
    if (mobileStickyBar) {
      const scrollPos = window.scrollY || window.pageYOffset || 0;
      if (scrollPos > 120) {
        mobileStickyBar.classList.add('visible');
      } else {
        mobileStickyBar.classList.remove('visible');
      }
    }
  }, { passive: true });
  window.addEventListener('resize', () => LinkCableSystem.updateWebLines());

  // Sincronização em tempo real quando rituais forem adicionados via Grimório em outra aba
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      AppState.loadFromStorage();
      const cur = AppState.activeCharacter;
      if (cur) {
        UIRenderer.renderDynamicRituals(cur);
      }
    }
  });

  window.addEventListener('focus', () => {
    // Sincroniza apenas os rituais caso tenham sido adicionados pelo Grimório em outra aba
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (rawData && AppState.activeCharacter) {
      try {
        const storedChars = JSON.parse(rawData);
        const storedCur = storedChars.find(c => c.id === AppState.activeCharacter.id);
        if (storedCur && Array.isArray(storedCur.rituals_list)) {
          AppState.activeCharacter.rituals_list = storedCur.rituals_list;
          UIRenderer.renderDynamicRituals(AppState.activeCharacter);
        }
      } catch (err) {
        console.error('Erro ao sincronizar rituais no foco:', err);
      }
    }
  });
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

const WELCOME_NOTICE_KEY = 'v20_welcome_notice_dismissed';

const WelcomeNoticeManager = {
  init() {
    const modal = document.getElementById('welcome-notice-modal');
    const btnClose = document.getElementById('btn-close-welcome-modal');
    const btnConfirm = document.getElementById('btn-confirm-welcome');
    const chkDontShow = document.getElementById('chk-dont-show-welcome');

    if (!modal) return;

    // Se o usuário ainda não descartou com a opção "não mostrar novamente", exibe o modal
    const isDismissed = localStorage.getItem(WELCOME_NOTICE_KEY);
    if (!isDismissed) {
      setTimeout(() => {
        modal.classList.remove('hidden');
      }, 350);
    }

    const closeAndSave = () => {
      if (chkDontShow && chkDontShow.checked) {
        localStorage.setItem(WELCOME_NOTICE_KEY, 'true');
      }
      modal.classList.add('hidden');
    };

    if (btnConfirm) btnConfirm.addEventListener('click', closeAndSave);
    if (btnClose) btnClose.addEventListener('click', closeAndSave);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAndSave();
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  AppState.init();
  UIRenderer.renderAll();
  DraggableWindowManager.init();
  setupEventListeners();
  DiceHistoryManager.updateBadgeCount();
  WelcomeNoticeManager.init();
  console.log('Ficha V20 Automatizada (Histórico + Temas + Noise + Regra de 10s e 1s) pronta.');
});
