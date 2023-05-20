import { createMatrix } from './addMinesNumber';

const open = (item) => {
  const cell = item;
  cell.classList.add('is-open');
  cell.textContent = cell.dataset.number;
  /* cell.isOpen = true; */
};

const openAdditionalCell = (event) => {
  const cell = event;
  open(cell);

  const matrix = createMatrix();
  const cells = document.querySelectorAll('.cell');

  const cellIndex = [...cells].findIndex((item) => item === cell);
  let y;
  let x;
  if (document.boardSize === 10) {
    // first variant befor upgrade to big board option, just for compare
    y = cellIndex > document.boardSize - 1 ? +cellIndex.toString()[0] : 0;
    x = cellIndex > document.boardSize - 1 ? +cellIndex.toString()[1] : cellIndex;
  } else {
    // universal beautifull solution
    y = Math.floor(cellIndex / document.boardSize);
    x = cellIndex % document.boardSize;
  }

  const arr = [];
  arr.push(matrix[y - 1]?.[x]);
  arr.push(matrix[y - 1]?.[x + 1]);
  arr.push(matrix[y - 1]?.[x - 1]);
  arr.push(matrix[y]?.[x + 1]);
  arr.push(matrix[y]?.[x - 1]);
  arr.push(matrix[y + 1]?.[x + 1]);
  arr.push(matrix[y + 1]?.[x]);
  arr.push(matrix[y + 1]?.[x - 1]);

  const normalizedArr = arr.filter((item) => item && item.textContent !== '🚩');

  normalizedArr.forEach((item) => {
    if (!item.dataset.number && !item.classList.contains('is-open')) {
      openAdditionalCell(item);
    } else {
      open(item);
    }
  });
  // open this part, if you decide throw flag without mine when area opens
  /* const activeFlags = [...cells].filter((item) => item.textContent === '🚩').length;
  document.flagCount = document.minesCount - activeFlags;
  document.querySelector('.counter').textContent = `Mines count: ${document.flagCount}`; */
};

const openCell = (event) => {
  const cell = event.target;
  if (cell.classList.contains('cell') && !cell.classList.contains('isBomb') && !cell.textContent) {
    if (!cell.classList.contains('is-open')) {
      document.querySelector('.moves-count').innerHTML = `Your moves: ${document.movesCount += 1}`;

      if (document.querySelector('.sound-switcher').checked) {
        new Audio('../src/assets/sounds/empty-cell.mp3').play();
      }
    }
    open(cell);
    if (!cell.dataset.number) {
      openAdditionalCell(cell);
    }
  }
};

export default openCell;
