import { Creation } from '../components/CreationHistory';

export const fallbackExamples: Creation[] = [
  {
    id: 'retro-clicker-sk',
    name: 'Retro Miner ⛏️',
    timestamp: new Date(),
    html: `<!DOCTYPE html>
<html lang="sk" class="dark">
<head>
  <meta charset="UTF-8">
  <title>Retro Miner ⛏️</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background-color: #0c0a09;
      color: #f5f5f4;
      font-family: system-ui, sans-serif;
    }
  </style>
</head>
<body class="p-6 flex flex-col items-center justify-center min-h-screen">
  <div class="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center shadow-2xl relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>
    
    <h1 class="text-3xl font-extrabold text-amber-500 mb-2">Retro Miner ⛏️</h1>
    <p class="text-zinc-400 text-xs mb-6 font-mono">Prebuď drahokamy k životu a rozvíjaj bane!</p>
    
    <div class="mb-6 bg-black/40 border border-zinc-800/80 p-4 rounded-xl">
      <div class="text-4xl font-black text-white tracking-tight" id="gold-count">0 💎</div>
      <div class="text-zinc-500 text-xs mt-1 font-mono" id="gps">0 drahokamov/s</div>
    </div>

    <button id="click-btn" class="w-36 h-36 bg-gradient-to-tr from-amber-500 to-yellow-400 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all cursor-pointer select-none">
      💎
    </button>

    <div class="space-y-3 text-left">
      <button id="upg-1" class="w-full bg-zinc-800 hover:bg-zinc-700/80 border border-zinc-700 p-3 rounded-xl flex justify-between items-center transition-colors">
        <div>
          <div class="font-bold text-sm text-zinc-100">Super Krompáč 👆</div>
          <div class="text-xs text-zinc-400 font-mono">+1 za kliknutie</div>
        </div>
        <span class="bg-amber-500/20 text-amber-400 text-xs px-2.5 py-1 rounded-full font-mono font-bold" id="upg-1-cost">15 💎</span>
      </button>

      <button id="upg-2" class="w-full bg-zinc-800 hover:bg-zinc-700/80 border border-zinc-700 p-3 rounded-xl flex justify-between items-center transition-colors">
        <div>
          <div class="font-bold text-sm text-zinc-100">Robotický Škriatok 🤖</div>
          <div class="text-xs text-zinc-400 font-mono">+1 drahokam/sekundu</div>
        </div>
        <span class="bg-amber-500/20 text-amber-400 text-xs px-2.5 py-1 rounded-full font-mono font-bold" id="upg-2-cost">100 💎</span>
      </button>
    </div>
  </div>

  <script>
    let gold = 0;
    let clickValue = 1;
    let autoValue = 0;
    let cost1 = 15;
    let cost2 = 100;

    const goldCountEl = document.getElementById('gold-count');
    const gpsEl = document.getElementById('gps');
    const clickBtn = document.getElementById('click-btn');
    const upg1 = document.getElementById('upg-1');
    const upg1Cost = document.getElementById('upg-1-cost');
    const upg2 = document.getElementById('upg-2');
    const upg2Cost = document.getElementById('upg-2-cost');

    function updateUI() {
      goldCountEl.textContent = Math.floor(gold) + ' 💎';
      gpsEl.textContent = autoValue + ' drahokamov/s';
      upg1Cost.textContent = cost1 + ' 💎';
      upg2Cost.textContent = cost2 + ' 💎';
    }

    clickBtn.addEventListener('click', () => {
      gold += clickValue;
      updateUI();
      // Simple bounce effect
      clickBtn.classList.add('scale-95');
      setTimeout(() => clickBtn.classList.remove('scale-95'), 80);
    });

    upg1.addEventListener('click', () => {
      if (gold >= cost1) {
        gold -= cost1;
        clickValue += 1;
        cost1 = Math.round(cost1 * 1.5);
        updateUI();
      }
    });

    upg2.addEventListener('click', () => {
      if (gold >= cost2) {
        gold -= cost2;
        autoValue += 1;
        cost2 = Math.round(cost2 * 1.6);
        updateUI();
      }
    });

    setInterval(() => {
      if (autoValue > 0) {
        gold += autoValue / 10;
        updateUI();
      }
    }, 100);
  </script>
</body>
</html>`
  },
  {
    id: 'kanban-sk',
    name: 'Tabuľa Úloh 📋',
    timestamp: new Date(),
    html: `<!DOCTYPE html>
<html lang="sk" class="dark">
<head>
  <meta charset="UTF-8">
  <title>Môj Plánovač 📋</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background-color: #09090b;
      color: #fafafa;
      font-family: system-ui, sans-serif;
    }
  </style>
</head>
<body class="p-6 min-h-screen">
  <div class="max-w-4xl mx-auto">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-zinc-800 pb-6 gap-4">
      <div>
        <h1 class="text-3xl font-extrabold text-white tracking-tight">Kreatívny Plánovač 📋</h1>
        <p class="text-zinc-500 text-sm mt-1">Rozdeľ si svoje plány do prehľadných stĺpcov a maj prehľad o stave</p>
      </div>
      <div class="flex gap-2 w-full sm:w-auto">
        <input type="text" id="task-input" placeholder="Nová dôležitá úloha..." class="flex-1 sm:flex-initial bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700 text-white font-medium">
        <button id="add-btn" class="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer">Pridať</button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Stĺpec 1 -->
      <div class="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-2xl flex flex-col min-h-[350px]">
        <h2 class="text-zinc-400 font-bold text-xs uppercase tracking-wider mb-4 flex items-center justify-between px-1">
          <span>Na plánovanie</span>
          <span class="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded-full" id="todo-count">0</span>
        </h2>
        <div id="col-todo" class="space-y-3 flex-1"></div>
      </div>

      <!-- Stĺpec 2 -->
      <div class="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-2xl flex flex-col min-h-[350px]">
        <h2 class="text-amber-500/80 font-bold text-xs uppercase tracking-wider mb-4 flex items-center justify-between px-1">
          <span>V procese</span>
          <span class="bg-amber-500/10 text-amber-500 text-[10px] px-2 py-0.5 rounded-full font-bold" id="doing-count">0</span>
        </h2>
        <div id="col-doing" class="space-y-3 flex-1"></div>
      </div>

      <!-- Stĺpec 3 -->
      <div class="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-2xl flex flex-col min-h-[350px]">
        <h2 class="text-emerald-500/80 font-bold text-xs uppercase tracking-wider mb-4 flex items-center justify-between px-1">
          <span>Hotovo</span>
          <span class="bg-emerald-500/10 text-emerald-500 text-[10px] px-2 py-0.5 rounded-full font-bold" id="done-count">0</span>
        </h2>
        <div id="col-done" class="space-y-3 flex-1"></div>
      </div>
    </div>
  </div>

  <script>
    let tasks = [
      { id: 1, text: 'Vytvoriť úvodnú skicu rozhrania', status: 'todo' },
      { id: 2, text: 'Preložiť texty a otestovať lokalizáciu', status: 'doing' },
      { id: 3, text: 'Nakonfigurovať moderné fallbacky v slovenčine', status: 'done' }
    ];

    const input = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');

    function render() {
      const todoCol = document.getElementById('col-todo');
      const doingCol = document.getElementById('col-doing');
      const doneCol = document.getElementById('col-done');

      todoCol.innerHTML = '';
      doingCol.innerHTML = '';
      doneCol.innerHTML = '';

      let todoCount = 0, doingCount = 0, doneCount = 0;

      tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-zinc-700/80 transition-all flex flex-col gap-3 shadow-md';
        
        const text = document.createElement('div');
        text.className = 'text-sm text-zinc-100 font-medium leading-relaxed';
        text.textContent = task.text;
        div.appendChild(text);

        const actions = document.createElement('div');
        actions.className = 'flex justify-end gap-1.5 mt-1';

        if (task.status !== 'todo') {
          const btnPrev = document.createElement('button');
          btnPrev.className = 'text-[10px] bg-zinc-800 text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg transition-colors font-mono';
          btnPrev.textContent = '←';
          btnPrev.onclick = () => moveTask(task.id, -1);
          actions.appendChild(btnPrev);
        }

        if (task.status !== 'done') {
          const btnNext = document.createElement('button');
          btnNext.className = 'text-[10px] bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white px-2.5 py-1.5 rounded-lg transition-colors font-mono';
          btnNext.textContent = '→';
          btnNext.onclick = () => moveTask(task.id, 1);
          actions.appendChild(btnNext);
        }

        const btnDel = document.createElement('button');
        btnDel.className = 'text-[10px] bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white px-2.5 py-1.5 rounded-lg transition-colors';
        btnDel.textContent = 'Zmazať';
        btnDel.onclick = () => deleteTask(task.id);
        actions.appendChild(btnDel);

        div.appendChild(actions);

        if (task.status === 'todo') {
          todoCol.appendChild(div);
          todoCount++;
        } else if (task.status === 'doing') {
          doingCol.appendChild(div);
          doingCount++;
        } else {
          doneCol.appendChild(div);
          doneCount++;
        }
      });

      document.getElementById('todo-count').textContent = todoCount;
      document.getElementById('doing-count').textContent = doingCount;
      document.getElementById('done-count').textContent = doneCount;
    }

    function moveTask(id, dir) {
      const statuses = ['todo', 'doing', 'done'];
      const task = tasks.find(t => t.id === id);
      if (task) {
        let currentIdx = statuses.indexOf(task.status);
        let nextIdx = currentIdx + dir;
        if (nextIdx >= 0 && nextIdx < statuses.length) {
          task.status = statuses[nextIdx];
          render();
        }
      }
    }

    function deleteTask(id) {
      tasks = tasks.filter(t => t.id !== id);
      render();
    }

    addBtn.onclick = () => {
      const txt = input.value.trim();
      if (txt) {
        tasks.push({
          id: Date.now(),
          text: txt,
          status: 'todo'
        });
        input.value = '';
        render();
      }
    };

    input.onkeydown = (e) => {
      if (e.key === 'Enter') {
        addBtn.click();
      }
    };

    render();
  </script>
</body>
</html>`
  },
  {
    id: 'skicar-sk',
    name: 'Slovenský Kreslič 🎨',
    timestamp: new Date(),
    html: `<!DOCTYPE html>
<html lang="sk" class="dark">
<head>
  <meta charset="UTF-8">
  <title>Slovenský Rýchloskicár</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background-color: #0c0a09;
      color: #f5f5f4;
      font-family: system-ui, sans-serif;
    }
  </style>
</head>
<body class="p-6 min-h-screen flex flex-col items-center justify-center">
  <div class="max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 relative z-10">
      <div>
        <h1 class="text-2xl font-extrabold text-white tracking-tight">Slovenský Rýchloskicár 🎨</h1>
        <p class="text-zinc-400 text-xs mt-1">Kresli myšou alebo prstom priamo na digitálne plátno</p>
      </div>
      <div class="flex items-center gap-3">
        <button id="clear-btn" class="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-3.5 py-2 rounded-xl transition-all border border-zinc-700 active:scale-95 cursor-pointer">Vyčistiť</button>
        <div class="flex gap-1.5 bg-black/40 p-1 rounded-xl border border-zinc-800">
          <button class="w-6 h-6 rounded-full bg-red-500 cursor-pointer border-2 border-transparent hover:scale-110 transition-transform ring-2 ring-white" data-color="#ef4444"></button>
          <button class="w-6 h-6 rounded-full bg-blue-500 cursor-pointer border-2 border-transparent hover:scale-110 transition-transform" data-color="#3b82f6"></button>
          <button class="w-6 h-6 rounded-full bg-emerald-500 cursor-pointer border-2 border-transparent hover:scale-110 transition-transform" data-color="#10b981"></button>
          <button class="w-6 h-6 rounded-full bg-white cursor-pointer border-2 border-zinc-700 hover:scale-110 transition-transform" data-color="#ffffff"></button>
        </div>
      </div>
    </div>

    <div class="bg-black/90 rounded-xl overflow-hidden border border-zinc-800 shadow-inner">
      <canvas id="paint-canvas" height="350" class="w-full h-auto cursor-crosshair block"></canvas>
    </div>
  </div>

  <script>
    const canvas = document.getElementById('paint-canvas');
    const ctx = canvas.getContext('2d');
    const clearBtn = document.getElementById('clear-btn');
    
    // Auto resolution scaling
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 350;

    let drawing = false;
    let color = '#ef4444';

    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    function getMousePos(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: (clientX - rect.left) * (canvas.width / rect.width),
        y: (clientY - rect.top) * (canvas.height / rect.height)
      };
    }

    function startDraw(e) {
      drawing = true;
      const pos = getMousePos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      e.preventDefault();
    }

    function draw(e) {
      if (!drawing) return;
      const pos = getMousePos(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      e.preventDefault();
    }

    function stopDraw() {
      drawing = false;
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);

    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    window.addEventListener('touchend', stopDraw);

    clearBtn.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.querySelectorAll('[data-color]').forEach(btn => {
      btn.addEventListener('click', () => {
        color = btn.getAttribute('data-color');
        ctx.strokeStyle = color;
        document.querySelectorAll('[data-color]').forEach(b => b.classList.remove('ring-2', 'ring-white'));
        btn.classList.add('ring-2', 'ring-white');
      });
    });

    // Handle window resizing
    window.addEventListener('resize', () => {
      const tempImg = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const prevWidth = canvas.width;
      canvas.width = canvas.parentElement.clientWidth;
      ctx.putImageData(tempImg, 0, 0);
      ctx.strokeStyle = color;
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    });
  </script>
</body>
</html>`
  }
];
