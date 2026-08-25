/**
 * FICHA DE PERSONAGEM V20 - GERENCIADOR DE JANELAS ARRASTÁVEIS E REDIMENSIONÁVEIS
 * Grade Magnética de 12px, Ímã, Redimensionamento Suave e Colapso
 */

'use strict';

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
      this.applyAllPositions();
      if (typeof LinkCableSystem !== 'undefined') {
        LinkCableSystem.updateWebLines();
      }
    });

    window.addEventListener('scroll', () => {
      if (typeof LinkCableSystem !== 'undefined') {
        LinkCableSystem.updateWebLines();
      }
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
    const isMobile = window.innerWidth <= 920;

    cards.forEach(card => {
      if (isMobile) {
        card.style.transform = '';
        card.style.width = '';
        card.style.height = '';
        card.classList.remove('is-custom-positioned', 'is-collapsed-small');
        return;
      }

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
    if (window.innerWidth <= 920) {
      card.classList.remove('is-collapsed-small');
      return;
    }

    const winId = card.getAttribute('data-window-id');
    const rect = card.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const hasCustomHeight = !!card.style.height;
    
    let isHeightCollapsed = false;
    if (hasCustomHeight) {
      if (winId === 'win-xp' && rect.height < 52) isHeightCollapsed = true;
      else if (winId === 'win-willpower' && rect.height < 82) isHeightCollapsed = true;
      else if (winId === 'win-humanity' && rect.height < 55) isHeightCollapsed = true;
      else if (winId === 'win-blood' && rect.height < 95) isHeightCollapsed = true;
      else if (rect.height < 52) isHeightCollapsed = true;
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
    if (typeof LinkCableSystem !== 'undefined') {
      LinkCableSystem.updateWebLines();
    }
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
        if (window.innerWidth <= 920) return; // Em mobile, desativa arraste para permitir scroll de toque natural

        if (e.target.closest('a') || e.target.closest('button') || e.target.closest('input') || 
            e.target.closest('select') || e.target.closest('textarea') || e.target.closest('.card-badge-link') || 
            e.target.closest('.dot') || e.target.closest('.trait-link-node') || 
            e.target.closest('.btn-add-trait') || e.target.closest('.btn-remove-trait') || 
            e.target.closest('.card-resize-handle')) {
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
        try { dragHandle.setPointerCapture(e.pointerId); } catch (_) {}
      });

      dragHandle.addEventListener('pointermove', (e) => {
        if (window.innerWidth <= 920) return;
        if (!this.activeCard || this.activeCard !== card || this.isResizing) return;

        const rawDx = e.clientX - this.startX;
        const rawDy = e.clientY - this.startY;
        
        // Efeito de ímã: Encaixa na grade magnética de 12px
        const snappedX = snapToGrid(this.initialX + rawDx, SNAP_GRID);
        const snappedY = snapToGrid(this.initialY + rawDy, SNAP_GRID);

        card.style.transform = `translate3d(${snappedX}px, ${snappedY}px, 0)`;
        card.classList.add('is-custom-positioned');
        card.classList.add('snap-aligned');

        if (typeof LinkCableSystem !== 'undefined') {
          requestAnimationFrame(() => LinkCableSystem.updateWebLines());
        }
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

        if (typeof LinkCableSystem !== 'undefined') {
          LinkCableSystem.updateWebLines();
        }
      };

      dragHandle.addEventListener('pointerup', endDrag);
      dragHandle.addEventListener('pointercancel', endDrag);

      // 2. REDIMENSIONAMENTO DE TAMANHO (RESIZABLE CARDS)
      if (resizeHandle) {
        resizeHandle.addEventListener('pointerdown', (e) => {
          if (window.innerWidth <= 920) return;
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
          try { resizeHandle.setPointerCapture(e.pointerId); } catch (_) {}
        });

        resizeHandle.addEventListener('pointermove', (e) => {
          if (window.innerWidth <= 920) return;
          if (!this.activeCard || this.activeCard !== card || !this.isResizing) return;

          const rawDw = e.clientX - this.startX;
          const rawDh = e.clientY - this.startY;

          const newW = Math.max(140, snapToGrid(this.initialW + rawDw, SNAP_GRID));
          const newH = Math.max(34, snapToGrid(this.initialH + rawDh, SNAP_GRID));

          card.style.width = `${newW}px`;
          card.style.height = `${newH}px`;
          card.classList.add('is-custom-positioned');
          this.checkCardCollapseState(card);

          if (typeof LinkCableSystem !== 'undefined') {
            requestAnimationFrame(() => LinkCableSystem.updateWebLines());
          }
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

          if (typeof LinkCableSystem !== 'undefined') {
            LinkCableSystem.updateWebLines();
          }
        };

        resizeHandle.addEventListener('pointerup', endResize);
        resizeHandle.addEventListener('pointercancel', endResize);
      }
    });
  }
};
