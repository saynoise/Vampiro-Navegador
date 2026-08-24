/**
 * FICHA DE PERSONAGEM V20 - RENDERIZAÇÃO DA INTERFACE
 * Desenho dos Atributos, Bolinhas, Disciplinas, Rituais e Vitalidade
 */

'use strict';

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

    // Indicador numérico exato do valor selecionado ao lado ESQUERDO das bolinhas
    const valBadge = document.createElement('span');
    valBadge.className = 'dots-value-num';
    valBadge.textContent = currentVal;
    valBadge.title = `Valor atual: ${currentVal}`;
    container.appendChild(valBadge);

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
      input.setAttribute('list', 'disciplines-datalist');
      input.setAttribute('autocomplete', 'off');
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