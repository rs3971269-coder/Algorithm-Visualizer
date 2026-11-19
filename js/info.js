const algorithmInfo = {
  selection: {
    name: 'Selection sort',
    best: 'O(n²)', average: 'O(n²)', worst: 'O(n²)', space: 'O(1)',
    note: 'Finds the smallest value in the unsorted part and moves it to the front. Always does the same number of comparisons.'
  },
  bubble: {
    name: 'Bubble sort',
    best: 'O(n²)', average: 'O(n²)', worst: 'O(n²)', space: 'O(1)',
    note: 'Compares neighbors and swaps them if they are in the wrong order. The largest value "bubbles" to the end each pass.'
  },
  insertion: {
    name: 'Insertion sort',
    best: 'O(n)', average: 'O(n²)', worst: 'O(n²)', space: 'O(1)',
    note: 'Takes one value at a time and slides it left into its place. Fast when the data is nearly sorted.'
  },
  merge: {
    name: 'Merge sort',
    best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)',
    note: 'Splits the array in half, sorts each half, then merges them. Needs extra memory for the merge.'
  },
  quick: {
    name: 'Quick sort',
    best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n²)', space: 'O(log n)',
    note: 'Picks a pivot, puts smaller values on its left and larger on its right, then repeats on each side.'
  },
  binary: {
    name: 'Binary search',
    best: 'O(1)', average: 'O(log n)', worst: 'O(log n)', space: 'O(1)',
    note: 'Needs a sorted array. Checks the middle and throws away half of the remaining values each step.'
  },
};

function showInfo(key) {
  const info = algorithmInfo[key];
  document.getElementById('info-name').textContent = info.name;
  document.getElementById('info-note').textContent = info.note;
  document.getElementById('info-best').textContent = info.best;
  document.getElementById('info-average').textContent = info.average;
  document.getElementById('info-worst').textContent = info.worst;
  document.getElementById('info-space').textContent = info.space;
}