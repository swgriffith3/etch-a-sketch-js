function addElement() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'div-box');
    grid.appendChild(div);
  }
}
addElement();
