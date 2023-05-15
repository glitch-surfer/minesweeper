import { createMatrix } from './addMinesNumber';

const open = (item) => {
  const cell = item;
  cell.style.backgroundColor = 'transparent';
  cell.style.border = '1px solid grey';
  cell.textContent = cell.dataset.number;
  cell.isOpen = true;
};

const openAdditionalCell = (event) => {
  const cell = event;
  open(cell);

  const matrix = createMatrix();
  const cells = document.querySelectorAll('.cell');

  const cellIndex = [...cells].findIndex((item) => item === cell);
  const y = cellIndex > 9 ? +cellIndex.toString()[0] : 0;
  const x = cellIndex > 9 ? +cellIndex.toString()[1] : cellIndex;

  const arr = [];
  arr.push(matrix[y - 1]?.[x]);
  arr.push(matrix[y - 1]?.[x + 1]);
  arr.push(matrix[y - 1]?.[x - 1]);
  arr.push(matrix[y]?.[x + 1]);
  arr.push(matrix[y]?.[x - 1]);
  arr.push(matrix[y + 1]?.[x + 1]);
  arr.push(matrix[y + 1]?.[x]);
  arr.push(matrix[y + 1]?.[x - 1]);

  const normalizedArr = arr.filter((item) => item && !item.isBomb);

  normalizedArr.forEach((item) => {
    if (!item.dataset.number && !item.isOpen) {
      openAdditionalCell(item);
    } else {
      open(item);
    }
  });
};

document.movesCount = 0;

const openCell = (event) => {
  const cell = event.target;
  if (cell.classList.contains('cell') && !cell.isBomb) {
    if (!cell.isOpen) {
      document.querySelector('.moves-count').innerHTML = `Your moves: ${++document.movesCount}`;
    }
    open(cell);
    if (!cell.dataset.number) {
      const matrix = createMatrix();
      const cells = document.querySelectorAll('.cell');

      const cellIndex = [...cells].findIndex((item) => item === cell);
      const y = cellIndex > 9 ? +cellIndex.toString()[0] : 0;
      const x = cellIndex > 9 ? +cellIndex.toString()[1] : cellIndex;

      const arr = [];
      arr.push(matrix[y - 1]?.[x]);
      arr.push(matrix[y - 1]?.[x + 1]);
      arr.push(matrix[y - 1]?.[x - 1]);
      arr.push(matrix[y]?.[x + 1]);
      arr.push(matrix[y]?.[x - 1]);
      arr.push(matrix[y + 1]?.[x + 1]);
      arr.push(matrix[y + 1]?.[x]);
      arr.push(matrix[y + 1]?.[x - 1]);

      const normalizedArr = arr.filter((item) => item && !item.isBomb);

      normalizedArr.forEach((item) => {
        if (!item.dataset.number && !item.isOpen) {
          openAdditionalCell(item);
        } else {
          open(item);
        }
      });
    }
  }
};

export default openCell;
