// Shared state and helpers used by every algorithm
const state = { running: false, stop: false, comparisons: 0, swaps: 0 };

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Speed slider is 1-10: higher value = shorter delay
function getDelay() {
  const speed = Number(document.getElementById('speed').value);
  return 520 - speed * 50;
}

// Call this after every comparison or swap. It pauses for the animation
// and throws if the user pressed Stop, which ends the algorithm cleanly.
async function step() {
  if (state.stop) throw new Error('stopped');
  await sleep(getDelay());
}

// Swap two values in the array and update the bar heights on screen
function swap(arr, bars, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  bars[i].style.height = arr[i] + '%';
  bars[j].style.height = arr[j] + '%';
}

function updateCounters() {
  document.getElementById('comparisons').textContent = state.comparisons;
  document.getElementById('swaps').textContent = state.swaps;
}