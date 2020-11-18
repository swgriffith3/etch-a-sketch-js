for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.setAttribute('id', 'div-box');
  div.setAttribute('class', 'divWhite divAqua');
  grid.appendChild(div);
}

let hover = document.getElementById('grid');

hover.addEventListener('mouseover', function (e) {
  e.target.style.background = 'aqua';
  console.log(e.target);
});
