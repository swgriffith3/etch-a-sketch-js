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

function createGrid(gridSize) {
  gridNum = gridSize * gridSize;
  for (let i = 0; i < gridNum; i++) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    let div = document.createElement('div');
    div.setAttribute('id', 'div-box');
    div.setAttribute('class', 'div-white');
    grid.insertAdjacentElement('beforeend', div);
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

function resetSize() {
  let gridPix = grid.querySelectorAll('div');
  gridPix.forEach((gridPix) => gridPix.remove());
  sizePrompt();
  createGrid(gridSize, gridSize);
}

let sizeBtn = document.getElementById('size-btn');
sizeBtn.addEventListener('click', resetSize);
