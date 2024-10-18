'use strict';

const container = document.querySelector('.container');
const canvas = document.querySelector('.canvas');
let squares;
const changeGridBtn = document.querySelector('.change-grid');
const clearBtn = document.querySelector('.clear-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const colorBtn = document.querySelector('.color-btn');
const gridSlider = document.querySelector('#gridS');
const toggleBordersBtn = document.querySelector('.toggle-borders');
let gridSize = 16;
let isMouseDown;

let ink = '#000000';

document.addEventListener('mousedown', () => (isMouseDown = true));
document.addEventListener('mouseup', () => (isMouseDown = false));

function createGrid(gridSize) {
  canvas.innerHTML = '';
  ink = '#000000';
  for (let col = 1; col <= gridSize; col++) {
    const column = document.createElement('div');
    column.classList.add('column');

    for (let square = 1; square <= gridSize; square++) {
      const gridField = document.createElement('div');
      gridField.classList.add('grid-item');
      column.appendChild(gridField);
    }
    canvas.appendChild(column);
  }

  squares = document.querySelectorAll('.grid-item');
  squares.forEach(s => {
    s.addEventListener('mouseover', () => {
      if (isMouseDown) s.style.backgroundColor = ink;
    });
  });
}

function clearField(gridSize) {
  createGrid(gridSize);
}

createGrid(gridSize);

// changeGridBtn.addEventListener('click', () => {
//   gridSize = gridSlider.value;
//   createGrid(gridSize);
// });

clearBtn.addEventListener('click', () => clearField(gridSlider.value));
gridSlider.addEventListener('mouseup', () => createGrid(gridSlider.value));
eraserBtn.addEventListener('click', () => {
  ink = '#cfcfcf';
});
colorBtn.addEventListener('click', () => {
  ink = '#000000';
});
