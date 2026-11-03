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