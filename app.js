function createGrid(gridNum) {
  let gridSize = gridNum * gridNum;
  for (let i = 0; i < gridSize; i++) {}
}

// for (let i = 0; i < 256; i++) {
//   const div = document.createElement('div');
//   div.setAttribute('id', 'div-box');
//   div.setAttribute('class', 'divWhite');
//   grid.appendChild(div);
// }

let hover = document.getElementById('grid');

hover.addEventListener('mouseover', function (e) {
  e.target.style.background = 'aqua';
});

function reset() {
  let gridClear = grid.querySelectorAll('.divWhite');
  gridClear.forEach((gridClear) => (gridClear.style.backgroundColor = 'white'));
}

let boxSize = document.getElementById('boxSize');
boxSize.addEventListener('click', gridSize);

function gridSize() {
  let size = prompt('Enter a number upto 1000');
  return size;
}

console.log(size);
