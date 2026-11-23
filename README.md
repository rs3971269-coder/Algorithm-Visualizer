# Algorithm Visualizer

An interactive web app that animates sorting and searching algorithms step by step, so you can see how each one works.

**Live demo:** https://rs3971269-coder.github.io/<repo-name>/

## Demo

![Algorithm Visualizer screenshot](image.png)

### Video demo

<video controls muted playsinline width="100%">
  <source src="demo.gif.mp4" type="video/mp4">
  Your browser does not support the video tag. <a href="demo.gif.mp4">Open/download the demo video</a>.
</video>

[Open the demo video directly](demo.gif.mp4)

## Features
- 5 sorting algorithms: selection, bubble, insertion, merge and quick sort
- Binary search with a custom or random target and a visible shrinking range
- Adjustable array size and animation speed, plus Stop and New array
- Live counters for comparisons and swaps
- Info panel showing best, average and worst time complexity and space complexity for the selected algorithm
- Dark and light mode support, responsive layout

## Tech used
HTML, CSS, JavaScript (no libraries)

## How it works
Every algorithm is written as an `async` function that calls `await step()` after each comparison or swap. This pauses the animation and also lets the Stop button end the run safely. Adding a new algorithm only needs a new function, one entry in the `algorithms` object and one dropdown option.

## Complexity
| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Selection sort | O(n²) | O(n²) | O(n²) | O(1) |
| Bubble sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Binary search | O(1) | O(log n) | O(log n) | O(1) |

## Run locally
1. Clone the repo
2. Open `index.html` in a browser

## What I learned
- Writing recursive algorithms (merge sort, quick sort) and animating them
- Using async/await to control timing in the browser
- Comparing time and space complexity in practice
- Structuring a JavaScript project across several files and deploying it with GitHub Pages

## Future improvements
- Shortest path finder (BFS and Dijkstra) on a grid
- Heap sort