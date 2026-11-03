// Register algorithms here. The key must match the <option> value in index.html
const algorithms = {
  selection: selectionSort,
  bubble: bubbleSort,
};


const container = document.getElementById('bars');
const sizeInput = document.getElementById('size');
const algoSelect = document.getElementById('algorithm');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const generateBtn = document.getElementById('generate');

let array = [];

function generateArray() {
  const size = Number(sizeInput.value);
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 95) + 5);
  renderBars();
  resetCounters();
}

function renderBars() {
  container.innerHTML = '';
  array.forEach((value) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = value + '%';
    container.appendChild(bar);
  });
}

function resetCounters() {
  state.comparisons = 0;
  state.swaps = 0;
  updateCounters();
}

function setRunning(running) {
  state.running = running;
  startBtn.disabled = running;
  generateBtn.disabled = running;
  sizeInput.disabled = running;
  algoSelect.disabled = running;
  stopBtn.disabled = !running;
}

async function startSort() {
  if (state.running) return;
  generateArray();            // fresh unsorted bars every run
  state.stop = false;
  setRunning(true);
  const bars = Array.from(container.children);
  try {
    await algorithms[algoSelect.value](array, bars);
  } catch (err) {
    if (err.message !== 'stopped') throw err;
  }
  setRunning(false);
}

startBtn.addEventListener('click', startSort);
stopBtn.addEventListener('click', () => { state.stop = true; });
generateBtn.addEventListener('click', generateArray);
sizeInput.addEventListener('input', generateArray);

generateArray();