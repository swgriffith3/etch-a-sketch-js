let gridSize;
let gridNum;

sizePrompt();

function sizePrompt() {
  gridSize = parseInt(prompt('Enter number of rows & colums upto 100', 16));
  if (gridSize < 1 || gridSize > 100) {
    gridSize = parseInt(prompt('Please enter a size between 1 and 100'));
  } else {
    gridSize = gridSize;
  }
}

const grid = document.getElementById('grid');

function createGrid(rows, cols) {
  gridNum = gridSize * gridSize;
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < gridNum; i++) {
    let div = document.createElement('div');
    div.setAttribute('id', 'div-box');
    div.setAttribute('class', 'div-white');
    grid.appendChild(div);
  }
}

createGrid(gridSize, gridSize);

let hover = document.getElementById('grid');
hover.addEventListener('mouseover', function (e) {
  e.target.style.background = 'aqua';
});

function resetColor() {
  let gridClear = grid.querySelectorAll('.div-white');
  gridClear.forEach((gridClear) => (gridClear.style.backgroundColor = 'white'));
}
