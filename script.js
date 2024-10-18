'use strict';

const container = document.querySelector('.container');
const canvas = document.querySelector('.canvas');
let squares;

let gridSize = 25;

function createGrid(gridSize) {
  for (let col = 1; col <= gridSize; col++) {
    const column = document.createElement('div');
    column.classList.add('column');

    for (let square = 1; square <= gridSize; square++) {
      const gridField = document.createElement('div');
      gridField.classList.add('grid-item');
      // gridField.textContent = `[${col},${square}]`;
      column.appendChild(gridField);
    }
    canvas.appendChild(column);
  }

  squares = document.querySelectorAll('.grid-item');
  console.log(squares);
}

createGrid(gridSize);

squares.forEach(s => {
  s.addEventListener('mouseenter', () => {
    s.style.backgroundColor = 'black';
  });
});
