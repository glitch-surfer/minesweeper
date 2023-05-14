import { createMatrix } from './addMinesNumber';

const open = (item) => {
  const cell = item;
  cell.style.backgroundColor = 'transparent';
  cell.style.border = '1px solid grey';
  cell.textContent = cell.dataset.number;
};

const openAdditionalCell = (event) => {
  const cell = event;

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

  const normalizedArr = arr.filter((item) => item && !item.childElementCount);

  normalizedArr.forEach((item) => {
    open(item);
    if (!cell.dataset.number) {
      openAdditionalCell(item);
    }
  });
};

const openCell = (event) => {
  const cell = event.target;
  if (cell.classList.contains('cell')) {
    open(cell);
  }

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

  const normalizedArr = arr.filter((item) => item && !item.childElementCount);

  console.log(normalizedArr);
  normalizedArr.forEach((item) => {
    open(item);
    console.log(cell.dataset.number);
    if (!cell.dataset.number) {
      openAdditionalCell(item);
    }
  });
};

export default openCell;
