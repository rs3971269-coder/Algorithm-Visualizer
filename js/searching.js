//binary search is a searching algorithm that finds the position of a target value within a sorted array. It compares the target value to the middle element of the array; if they are not equal, it halves the array and continues the search in the half that could contain the target value. This process repeats until the target value is found or the subarray size becomes zero.
async function binarySearch(arr, bars) {
  const message = document.getElementById('message');

  // Binary search needs a sorted array, so sort it first (no animation)
  arr.sort((a, b) => a - b);
  arr.forEach((value, i) => { bars[i].style.height = value + '%'; });

  // Use the typed target, or pick a random value from the array
  const typed = document.getElementById('target').value;
  const target = typed === ''
    ? arr[Math.floor(Math.random() * arr.length)]
    : Number(typed);

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // Fade the bars that are already ruled out
    bars.forEach((bar, i) => bar.classList.toggle('out', i < low || i > high));
    bars[mid].classList.add('compare');
    state.comparisons++;
    updateCounters();
    message.textContent =
      `Looking for ${target}. low = ${low}, mid = ${mid}, high = ${high}. Middle value is ${arr[mid]}.`;
    await step();
    bars[mid].classList.remove('compare');

    if (arr[mid] === target) {
      bars[mid].classList.add('sorted');
      message.textContent =
        `Found ${target} at position ${mid} after ${state.comparisons} comparisons.`;
      return;
    }

    if (arr[mid] < target) {
      low = mid + 1;      // target is in the right half
    } else {
      high = mid - 1;     // target is in the left half
    }
  }

  bars.forEach((bar) => bar.classList.add('out'));
  message.textContent = `${target} is not in the array.`;
}