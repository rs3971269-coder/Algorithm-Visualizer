// Each algorithm receives the data array and the matching bar elements.
// Add new algorithms here (bubble, insertion, merge, quick) the same way.

async function selectionSort(arr, bars) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    bars[i].classList.add('current');

    for (let j = i + 1; j < n; j++) {
      bars[j].classList.add('compare');
      state.comparisons++;
      updateCounters();
      await step();

      if (arr[j] < arr[min]) {
        if (min !== i) bars[min].classList.remove('min');
        min = j;
        bars[min].classList.add('min');
      }
      bars[j].classList.remove('compare');
    }

    if (min !== i) {
      swap(arr, bars, i, min);
      state.swaps++;
      updateCounters();
      await step();
    }

    bars[min].classList.remove('min');
    bars[i].classList.remove('current');
    bars[i].classList.add('sorted');
  }

  bars[n - 1].classList.add('sorted');
}


//bubble sort 

async function bubbleSort(arr, bars) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      bars[j].classList.add('compare');
      bars[j + 1].classList.add('compare');
      state.comparisons++;
      updateCounters();
      await step();

      if (arr[j] > arr[j + 1]) {
        swap(arr, bars, j, j + 1);
        state.swaps++;
        updateCounters();
        await step();
      }
      bars[j].classList.remove('compare');
      bars[j + 1].classList.remove('compare');
    }
    bars[n - i - 1].classList.add('sorted');
  }
  bars[0].classList.add('sorted');
}


//insertion sort

async function insertionSort(arr, bars) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let j = i;
    bars[j].classList.add('current');   // the bar we are inserting

    while (j > 0) {
      bars[j - 1].classList.add('compare');
      state.comparisons++;
      updateCounters();
      await step();
      bars[j - 1].classList.remove('compare');

      if (arr[j - 1] > arr[j]) {
        swap(arr, bars, j - 1, j);      // move it one place left
        state.swaps++;
        updateCounters();
        bars[j].classList.remove('current');
        j--;
        bars[j].classList.add('current');
        await step();
      } else {
        break;                          // it is in the right place
      }
    }
    bars[j].classList.remove('current');
  }

  bars.forEach((bar) => bar.classList.add('sorted'));
}

// Writes one value into the array and its bar, with animation
async function writeBar(arr, bars, index, value) {
  bars[index].classList.add('compare');
  await step();
  arr[index] = value;
  bars[index].style.height = value + '%';
  state.swaps++;                 // for merge sort this counts writes
  updateCounters();
  bars[index].classList.remove('compare');
}

async function mergeSort(arr, bars) {
  await mergeSortHelper(arr, bars, 0, arr.length - 1);
  bars.forEach((bar) => bar.classList.add('sorted'));
}

// Split the range in half, sort each half, then merge them
async function mergeSortHelper(arr, bars, left, right) {
  if (left >= right) return;     // one element is already sorted
  const mid = Math.floor((left + right) / 2);
  await mergeSortHelper(arr, bars, left, mid);
  await mergeSortHelper(arr, bars, mid + 1, right);
  await merge(arr, bars, left, mid, right);
}

async function merge(arr, bars, left, mid, right) {
  const leftPart = arr.slice(left, mid + 1);
  const rightPart = arr.slice(mid + 1, right + 1);
  let i = 0, j = 0, k = left;

  // Take the smaller front value from either half
  while (i < leftPart.length && j < rightPart.length) {
    state.comparisons++;
    updateCounters();
    if (leftPart[i] <= rightPart[j]) {
      await writeBar(arr, bars, k, leftPart[i]);
      i++;
    } else {
      await writeBar(arr, bars, k, rightPart[j]);
      j++;
    }
    k++;
  }

  // Copy whatever is left in either half
  while (i < leftPart.length) {
    await writeBar(arr, bars, k, leftPart[i]);
    i++; k++;
  }
  while (j < rightPart.length) {
    await writeBar(arr, bars, k, rightPart[j]);
    j++; k++;
  }
}