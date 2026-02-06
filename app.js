/**
 * YardCraft - Landscape Design Studio
 * Main application logic
 */

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────
  const state = {
    photo: null,
    photoImg: null,
    placedItems: [],      // { id, catalogId, x, y, w, h, rotation, el }
    selectedId: null,
    activeTool: 'select', // select | resize | delete
    activeCategory: 'trees',
    zoom: 1,
    history: [],
    historyIndex: -1,
    nextId: 1,
    dragState: null,      // { itemId, offsetX, offsetY } | { sidebarItem, ghost }
    resizeState: null,
  };

  // ── DOM refs ───────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const splash = $('#splash');
  const editor = $('#editor');
  const uploadZone = $('#uploadZone');
  const fileInput = $('#fileInput');
  const btnDemo = $('#btnDemo');
  const canvas = $('#mainCanvas');
  const ctx = canvas.getContext('2d');
  const canvasWrapper = $('#canvasWrapper');
  const placedLayer = $('#placedItemsLayer');
  const itemsGrid = $('#itemsGrid');
  const categoryTabs = $('#categoryTabs');
  const searchInput = $('#searchInput');
  const zoomLevel = $('#zoomLevel');
  const itemCount = $('#itemCount');
  const estimateModal = $('#estimateModal');
  const estimateList = $('#estimateList');
  const estimateTotal = $('#estimateTotal');

  // ── Photo Upload ───────────────────────────────────────
  uploadZone.addEventListener('click', () => fileInput.click());
  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('drag-over');
  });
  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('drag-over');
  });
  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) loadPhoto(file);
  });
  fileInput.addEventListener('change', (e) => {
    if (e.target.files[0]) loadPhoto(e.target.files[0]);
  });

  btnDemo.addEventListener('click', () => {
    loadDemoPhoto();
  });

  function loadPhoto(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        state.photoImg = img;
        showEditor();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function loadDemoPhoto() {
    // Generate a nice demo house scene on canvas
    const img = document.createElement('canvas');
    img.width = 1200;
    img.height = 750;
    const c = img.getContext('2d');

    // Sky gradient
    const skyGrad = c.createLinearGradient(0, 0, 0, 400);
    skyGrad.addColorStop(0, '#87CEEB');
    skyGrad.addColorStop(1, '#E0F7FA');
    c.fillStyle = skyGrad;
    c.fillRect(0, 0, 1200, 400);

    // Sun
    c.fillStyle = '#FFF9C4';
    c.beginPath(); c.arc(950, 80, 50, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#FFF176';
    c.beginPath(); c.arc(950, 80, 35, 0, Math.PI * 2); c.fill();

    // Clouds
    function drawCloud(cx, cy, size) {
      c.fillStyle = 'rgba(255,255,255,0.85)';
      c.beginPath(); c.arc(cx, cy, size, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.arc(cx - size * 0.8, cy + size * 0.2, size * 0.7, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.arc(cx + size * 0.8, cy + size * 0.2, size * 0.7, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.arc(cx + size * 0.3, cy - size * 0.3, size * 0.6, 0, Math.PI * 2); c.fill();
    }
    drawCloud(200, 60, 30);
    drawCloud(500, 100, 25);
    drawCloud(750, 50, 35);

    // Ground / lawn
    const grassGrad = c.createLinearGradient(0, 380, 0, 750);
    grassGrad.addColorStop(0, '#66BB6A');
    grassGrad.addColorStop(1, '#388E3C');
    c.fillStyle = grassGrad;
    c.fillRect(0, 380, 1200, 370);

    // Driveway
    c.fillStyle = '#9E9E9E';
    c.beginPath();
    c.moveTo(750, 750);
    c.lineTo(850, 750);
    c.lineTo(780, 470);
    c.lineTo(700, 470);
    c.closePath();
    c.fill();
    c.fillStyle = '#BDBDBD';
    c.beginPath();
    c.moveTo(752, 748);
    c.lineTo(848, 748);
    c.lineTo(778, 472);
    c.lineTo(702, 472);
    c.closePath();
    c.fill();

    // House body
    c.fillStyle = '#EFEBE9';
    c.fillRect(280, 240, 500, 240);

    // House shadow
    c.fillStyle = 'rgba(0,0,0,0.06)';
    c.fillRect(280, 240, 500, 30);

    // Door
    c.fillStyle = '#5D4037';
    c.fillRect(490, 340, 60, 140);
    c.fillStyle = '#8D6E63';
    c.fillRect(495, 345, 50, 130);
    // Doorknob
    c.fillStyle = '#FDD835';
    c.beginPath(); c.arc(535, 420, 4, 0, Math.PI * 2); c.fill();

    // Windows
    function drawWindow(x, y, w, h) {
      c.fillStyle = '#81D4FA';
      c.fillRect(x, y, w, h);
      c.strokeStyle = '#ECEFF1';
      c.lineWidth = 3;
      c.strokeRect(x, y, w, h);
      c.beginPath();
      c.moveTo(x + w / 2, y);
      c.lineTo(x + w / 2, y + h);
      c.stroke();
      c.beginPath();
      c.moveTo(x, y + h / 2);
      c.lineTo(x + w, y + h / 2);
      c.stroke();
    }
    drawWindow(330, 300, 70, 60);
    drawWindow(430, 300, 50, 60);
    drawWindow(560, 300, 50, 60);
    drawWindow(650, 300, 70, 60);

    // Roof
    c.fillStyle = '#795548';
    c.beginPath();
    c.moveTo(250, 250);
    c.lineTo(530, 130);
    c.lineTo(810, 250);
    c.closePath();
    c.fill();

    c.fillStyle = '#6D4C41';
    c.beginPath();
    c.moveTo(260, 250);
    c.lineTo(530, 140);
    c.lineTo(530, 130);
    c.lineTo(250, 250);
    c.closePath();
    c.fill();

    // Chimney
    c.fillStyle = '#8D6E63';
    c.fillRect(650, 150, 35, 80);
    c.fillStyle = '#795548';
    c.fillRect(645, 145, 45, 12);

    // Garage
    c.fillStyle = '#E0E0E0';
    c.fillRect(680, 350, 100, 130);
    c.fillStyle = '#BDBDBD';
    c.fillRect(688, 360, 84, 110);
    // Garage lines
    for (let i = 0; i < 8; i++) {
      c.fillStyle = '#9E9E9E';
      c.fillRect(688, 365 + i * 14, 84, 2);
    }

    // Front porch
    c.fillStyle = '#D7CCC8';
    c.fillRect(460, 475, 120, 10);

    // Steps
    c.fillStyle = '#BCAAA4';
    c.fillRect(480, 485, 80, 10);
    c.fillRect(490, 495, 60, 10);

    // Convert to image
    const dataUrl = img.toDataURL();
    const realImg = new Image();
    realImg.onload = () => {
      state.photoImg = realImg;
      showEditor();
    };
    realImg.src = dataUrl;
  }

  function showEditor() {
    splash.classList.add('hidden');
    editor.classList.remove('hidden');
    fitCanvas();
    renderCanvas();
    populateItems(state.activeCategory);
    saveHistory();
  }

  // ── Canvas Rendering ───────────────────────────────────
  function fitCanvas() {
    const rect = canvasWrapper.getBoundingClientRect();
    const img = state.photoImg;
    const scale = Math.min(rect.width / img.width, rect.height / img.height, 1);
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;
    placedLayer.style.width = canvas.width + 'px';
    placedLayer.style.height = canvas.height + 'px';
    state.zoom = 1;
    zoomLevel.textContent = '100%';
  }

  function renderCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (state.photoImg) {
      ctx.drawImage(state.photoImg, 0, 0, canvas.width, canvas.height);
    }
  }

  function applyZoom() {
    canvasWrapper.style.transform = `scale(${state.zoom})`;
    zoomLevel.textContent = Math.round(state.zoom * 100) + '%';
  }

  $('#zoomIn').addEventListener('click', () => {
    state.zoom = Math.min(state.zoom + 0.1, 3);
    applyZoom();
  });
  $('#zoomOut').addEventListener('click', () => {
    state.zoom = Math.max(state.zoom - 0.1, 0.3);
    applyZoom();
  });
  $('#zoomFit').addEventListener('click', () => {
    state.zoom = 1;
    applyZoom();
  });

  // ── Sidebar: Categories & Items ────────────────────────
  categoryTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.cat-tab');
    if (!tab) return;
    $$('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    state.activeCategory = tab.dataset.category;
    populateItems(tab.dataset.category);
  });

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    if (!q) {
      populateItems(state.activeCategory);
      return;
    }
    const all = [];
    Object.values(ITEMS_CATALOG).forEach(cat =>
      cat.forEach(item => {
        if (item.name.toLowerCase().includes(q)) all.push(item);
      })
    );
    renderItemsGrid(all);
  });

  function populateItems(category) {
    renderItemsGrid(ITEMS_CATALOG[category] || []);
  }

  function renderItemsGrid(items) {
    itemsGrid.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.draggable = true;
      card.dataset.itemId = item.id;
      card.innerHTML = `
        <div class="item-preview">${item.svg}</div>
        <div class="item-info">
          <span class="item-name">${item.name}</span>
          <span class="item-price">$${item.price}</span>
        </div>
      `;
      // Drag from sidebar
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id);
        e.dataTransfer.effectAllowed = 'copy';
        // Create ghost
        const ghost = document.createElement('div');
        ghost.innerHTML = item.svg;
        ghost.style.cssText = 'position:fixed;top:-9999px;width:80px;height:80px;opacity:0.8;';
        document.body.appendChild(ghost);
        e.dataTransfer.setDragImage(ghost, 40, 40);
        setTimeout(() => ghost.remove(), 0);
      });

      // Double-click to add at center
      card.addEventListener('dblclick', () => {
        addItemToCanvas(item, canvas.width / 2 - item.width / 2, canvas.height / 2 - item.height / 2);
      });

      itemsGrid.appendChild(card);
    });
  }

  // ── Drop onto canvas ───────────────────────────────────
  canvasWrapper.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    canvasWrapper.classList.add('drop-hover');
  });
  canvasWrapper.addEventListener('dragleave', () => {
    canvasWrapper.classList.remove('drop-hover');
  });
  canvasWrapper.addEventListener('drop', (e) => {
    e.preventDefault();
    canvasWrapper.classList.remove('drop-hover');
    const catalogId = e.dataTransfer.getData('text/plain');
    if (!catalogId) return;
    const item = findCatalogItem(catalogId);
    if (!item) return;
    const rect = canvasWrapper.getBoundingClientRect();
    const x = (e.clientX - rect.left) / state.zoom - item.width / 2;
    const y = (e.clientY - rect.top) / state.zoom - item.height / 2;
    addItemToCanvas(item, x, y);
  });

  function findCatalogItem(id) {
    for (const cat of Object.values(ITEMS_CATALOG)) {
      const found = cat.find(i => i.id === id);
      if (found) return found;
    }
    return null;
  }

  // ── Place item on canvas ───────────────────────────────
  function addItemToCanvas(catalogItem, x, y) {
    const id = 'placed-' + state.nextId++;
    const w = catalogItem.width;
    const h = catalogItem.height;

    const el = document.createElement('div');
    el.className = 'placed-item';
    el.dataset.placedId = id;
    el.innerHTML = catalogItem.svg;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.width = w + 'px';
    el.style.height = h + 'px';

    placedLayer.appendChild(el);

    const placedItem = { id, catalogId: catalogItem.id, x, y, w, h, rotation: 0, el };
    state.placedItems.push(placedItem);

    updateItemCount();
    saveHistory();
    selectItem(id);
    attachItemEvents(el, placedItem);

    // Fun little bounce animation
    el.classList.add('item-enter');
    setTimeout(() => el.classList.remove('item-enter'), 400);
  }

  function attachItemEvents(el, placedItem) {
    el.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      if (state.activeTool === 'delete') {
        removeItem(placedItem.id);
        return;
      }
      selectItem(placedItem.id);
      if (state.activeTool === 'select') {
        const rect = el.getBoundingClientRect();
        state.dragState = {
          itemId: placedItem.id,
          offsetX: e.clientX - rect.left,
          offsetY: e.clientY - rect.top,
        };
      }
    });

    // Touch support
    el.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      if (state.activeTool === 'delete') {
        removeItem(placedItem.id);
        return;
      }
      selectItem(placedItem.id);
      const touch = e.touches[0];
      const rect = el.getBoundingClientRect();
      state.dragState = {
        itemId: placedItem.id,
        offsetX: touch.clientX - rect.left,
        offsetY: touch.clientY - rect.top,
      };
    }, { passive: false });
  }

  // ── Move placed items ──────────────────────────────────
  document.addEventListener('mousemove', (e) => {
    if (!state.dragState || !state.dragState.itemId) return;
    const item = state.placedItems.find(i => i.id === state.dragState.itemId);
    if (!item) return;
    const wrapperRect = canvasWrapper.getBoundingClientRect();
    let nx = (e.clientX - wrapperRect.left) / state.zoom - state.dragState.offsetX;
    let ny = (e.clientY - wrapperRect.top) / state.zoom - state.dragState.offsetY;
    // Clamp within canvas
    nx = Math.max(-item.w / 2, Math.min(canvas.width - item.w / 2, nx));
    ny = Math.max(-item.h / 2, Math.min(canvas.height - item.h / 2, ny));
    item.x = nx;
    item.y = ny;
    item.el.style.left = nx + 'px';
    item.el.style.top = ny + 'px';
  });

  document.addEventListener('mouseup', () => {
    if (state.dragState && state.dragState.itemId) {
      saveHistory();
    }
    state.dragState = null;
  });

  // Touch move/end
  document.addEventListener('touchmove', (e) => {
    if (!state.dragState || !state.dragState.itemId) return;
    e.preventDefault();
    const touch = e.touches[0];
    const item = state.placedItems.find(i => i.id === state.dragState.itemId);
    if (!item) return;
    const wrapperRect = canvasWrapper.getBoundingClientRect();
    let nx = (touch.clientX - wrapperRect.left) / state.zoom - state.dragState.offsetX;
    let ny = (touch.clientY - wrapperRect.top) / state.zoom - state.dragState.offsetY;
    nx = Math.max(-item.w / 2, Math.min(canvas.width - item.w / 2, nx));
    ny = Math.max(-item.h / 2, Math.min(canvas.height - item.h / 2, ny));
    item.x = nx;
    item.y = ny;
    item.el.style.left = nx + 'px';
    item.el.style.top = ny + 'px';
  }, { passive: false });

  document.addEventListener('touchend', () => {
    if (state.dragState && state.dragState.itemId) saveHistory();
    state.dragState = null;
  });

  // ── Selection ──────────────────────────────────────────
  function selectItem(id) {
    state.selectedId = id;
    $$('.placed-item').forEach(el => el.classList.remove('selected'));
    const item = state.placedItems.find(i => i.id === id);
    if (item) item.el.classList.add('selected');
  }

  function deselectAll() {
    state.selectedId = null;
    $$('.placed-item').forEach(el => el.classList.remove('selected'));
  }

  placedLayer.addEventListener('mousedown', (e) => {
    if (e.target === placedLayer) deselectAll();
  });

  // ── Delete ─────────────────────────────────────────────
  function removeItem(id) {
    const idx = state.placedItems.findIndex(i => i.id === id);
    if (idx === -1) return;
    const item = state.placedItems[idx];
    item.el.classList.add('item-exit');
    setTimeout(() => {
      item.el.remove();
      state.placedItems.splice(idx, 1);
      updateItemCount();
      saveHistory();
    }, 300);
    if (state.selectedId === id) state.selectedId = null;
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (state.selectedId && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        removeItem(state.selectedId);
      }
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
      e.preventDefault();
      undo();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
      e.preventDefault();
      redo();
    }
  });

  // ── Tools ──────────────────────────────────────────────
  $$('.tool-btn[data-tool]').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.tool-btn[data-tool]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTool = btn.dataset.tool;
      placedLayer.className = 'placed-items-layer tool-' + state.activeTool;
    });
  });

  // Resize via scroll on selected item
  placedLayer.addEventListener('wheel', (e) => {
    if (!state.selectedId) return;
    if (state.activeTool !== 'resize' && state.activeTool !== 'select') return;
    e.preventDefault();
    const item = state.placedItems.find(i => i.id === state.selectedId);
    if (!item) return;
    const scaleFactor = e.deltaY < 0 ? 1.05 : 0.95;
    const newW = Math.max(20, Math.min(600, item.w * scaleFactor));
    const newH = Math.max(20, Math.min(600, item.h * scaleFactor));
    item.w = newW;
    item.h = newH;
    item.el.style.width = newW + 'px';
    item.el.style.height = newH + 'px';
    saveHistory();
  }, { passive: false });

  // ── Undo / Redo ────────────────────────────────────────
  function saveHistory() {
    const snapshot = state.placedItems.map(i => ({
      id: i.id,
      catalogId: i.catalogId,
      x: i.x,
      y: i.y,
      w: i.w,
      h: i.h,
      rotation: i.rotation,
    }));
    // Truncate future history
    state.history = state.history.slice(0, state.historyIndex + 1);
    state.history.push(JSON.stringify(snapshot));
    state.historyIndex = state.history.length - 1;
    // Limit history length
    if (state.history.length > 50) {
      state.history.shift();
      state.historyIndex--;
    }
  }

  function restoreHistory(index) {
    if (index < 0 || index >= state.history.length) return;
    state.historyIndex = index;
    const snapshot = JSON.parse(state.history[index]);

    // Remove all placed elements
    state.placedItems.forEach(i => i.el.remove());
    state.placedItems = [];

    // Recreate
    snapshot.forEach(data => {
      const catalogItem = findCatalogItem(data.catalogId);
      if (!catalogItem) return;

      const el = document.createElement('div');
      el.className = 'placed-item';
      el.dataset.placedId = data.id;
      el.innerHTML = catalogItem.svg;
      el.style.left = data.x + 'px';
      el.style.top = data.y + 'px';
      el.style.width = data.w + 'px';
      el.style.height = data.h + 'px';
      placedLayer.appendChild(el);

      const placedItem = {
        id: data.id,
        catalogId: data.catalogId,
        x: data.x,
        y: data.y,
        w: data.w,
        h: data.h,
        rotation: data.rotation,
        el,
      };
      state.placedItems.push(placedItem);
      attachItemEvents(el, placedItem);
    });

    // Update nextId
    const maxId = snapshot.reduce((max, i) => {
      const num = parseInt(i.id.replace('placed-', ''), 10);
      return Math.max(max, num);
    }, 0);
    state.nextId = maxId + 1;

    updateItemCount();
    deselectAll();
  }

  function undo() {
    if (state.historyIndex > 0) restoreHistory(state.historyIndex - 1);
  }
  function redo() {
    if (state.historyIndex < state.history.length - 1) restoreHistory(state.historyIndex + 1);
  }

  $('#btnUndo').addEventListener('click', undo);
  $('#btnRedo').addEventListener('click', redo);

  // ── Estimate Modal ─────────────────────────────────────
  $('#btnEstimate').addEventListener('click', showEstimate);
  $('#closeEstimate').addEventListener('click', () => estimateModal.classList.add('hidden'));
  estimateModal.addEventListener('click', (e) => {
    if (e.target === estimateModal) estimateModal.classList.add('hidden');
  });

  function showEstimate() {
    // Aggregate items
    const counts = {};
    state.placedItems.forEach(pi => {
      if (!counts[pi.catalogId]) {
        const cat = findCatalogItem(pi.catalogId);
        counts[pi.catalogId] = { name: cat.name, price: cat.price, qty: 0 };
      }
      counts[pi.catalogId].qty++;
    });

    estimateList.innerHTML = '';
    let total = 0;

    if (Object.keys(counts).length === 0) {
      estimateList.innerHTML = '<div class="estimate-empty"><p>No items placed yet!</p><p>Drag some plants, walls, or decor onto your photo to get started.</p></div>';
      estimateTotal.textContent = '$0.00';
      estimateModal.classList.remove('hidden');
      return;
    }

    Object.values(counts).forEach(item => {
      const lineTotal = item.price * item.qty;
      total += lineTotal;
      const row = document.createElement('div');
      row.className = 'estimate-row';
      row.innerHTML = `
        <span class="est-name">${item.name}</span>
        <span class="est-qty">&times; ${item.qty}</span>
        <span class="est-unit">@ $${item.price.toFixed(2)}</span>
        <span class="est-line-total">$${lineTotal.toFixed(2)}</span>
      `;
      estimateList.appendChild(row);
    });

    estimateTotal.textContent = '$' + total.toFixed(2);
    estimateModal.classList.remove('hidden');
  }

  // ── Print ──────────────────────────────────────────────
  $('#btnPrint').addEventListener('click', () => {
    window.print();
  });

  // ── Save Design (screenshot) ───────────────────────────
  $('#btnSaveDesign').addEventListener('click', () => {
    // Draw everything to a temp canvas
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tctx = tempCanvas.getContext('2d');
    tctx.drawImage(canvas, 0, 0);

    // Draw placed SVG items
    const promises = state.placedItems.map(item => {
      return new Promise(resolve => {
        const svgStr = item.el.innerHTML;
        const blob = new Blob([svgStr], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => {
          tctx.drawImage(img, item.x, item.y, item.w, item.h);
          URL.revokeObjectURL(url);
          resolve();
        };
        img.onerror = resolve;
        img.src = url;
      });
    });

    Promise.all(promises).then(() => {
      const a = document.createElement('a');
      a.download = 'yardcraft-design.png';
      a.href = tempCanvas.toDataURL('image/png');
      a.click();
    });
  });

  // ── New Photo ──────────────────────────────────────────
  $('#btnNewPhoto').addEventListener('click', () => {
    if (state.placedItems.length > 0) {
      if (!confirm('Start over with a new photo? Your current design will be lost.')) return;
    }
    state.placedItems.forEach(i => i.el.remove());
    state.placedItems = [];
    state.history = [];
    state.historyIndex = -1;
    state.nextId = 1;
    state.selectedId = null;
    updateItemCount();
    editor.classList.add('hidden');
    splash.classList.remove('hidden');
  });

  // ── Helpers ────────────────────────────────────────────
  function updateItemCount() {
    itemCount.textContent = state.placedItems.length;
  }

  // ── Window resize ──────────────────────────────────────
  window.addEventListener('resize', () => {
    if (!state.photoImg) return;
    fitCanvas();
    renderCanvas();
    // Reposition items if needed
  });

})();
