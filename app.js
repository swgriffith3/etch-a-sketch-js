let gridSize = parseInt(prompt('Enter grid size upto 1000', 16));

function createGrid() {
  let gridNum = gridSize * gridSize;
  for (let i = 0; i < gridNum; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'div-box');
    div.setAttribute('class', 'divWhite');
    grid.appendChild(div);
  }
}
createGrid();

let hover = document.getElementById('grid');

hover.addEventListener('mouseover', function (e) {
  e.target.style.background = 'aqua';
});

function reset() {
  let gridClear = grid.querySelectorAll('.divWhite');
  gridClear.forEach((gridClear) => (gridClear.style.backgroundColor = 'white'));
}
