/**
 * FICHA DE PERSONAGEM V20 - SISTEMA DE LAÇOS DE SANGUE (LINK CABLES)
 * Física de Curvas Bézier, Ancoragem Global e Traçado SVG
 */

'use strict';

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