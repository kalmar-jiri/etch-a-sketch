'use strict';

const container = document.querySelector('.container');
const canvas = document.querySelector('.canvas');

let gridSize = 16;

for (let col = 1; col <= gridSize; col++) {
  const column = document.createElement('div');
  column.classList.add('column');

  for (let square = 1; square <= gridSize; square++) {
    const gridField = document.createElement('div');
    gridField.classList.add('grid-field');
    // gridField.textContent = `[${col},${square}]`;
    column.appendChild(gridField);
  }
  canvas.appendChild(column);
}
