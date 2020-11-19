for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.setAttribute('id', 'div-box');
  div.setAttribute('class', 'divWhite');
  grid.appendChild(div);
}

let hover = document.getElementById('grid');

hover.addEventListener('mouseover', function (e) {
  e.target.style.background = 'aqua';
});

function reset() {
  let gridClear = grid.querySelectorAll('.divWhite');
  gridClear.forEach((gridClear) => (gridClear.style.backgroundColor = 'white'));
}

function gridPrompt() {
  let button = document.getElementById('boxSize');
  button.addEventListener('click', () => {
    let size = prompt('Please choose grid size 1 - 10000');
    size = parseInt(size);
  });
}
