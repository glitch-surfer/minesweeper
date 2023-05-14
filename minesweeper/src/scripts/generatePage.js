import generateMines from './generateMines';
import gameOver from './gameOver';
import openCell from './openCell';
import addMinesNumber from './addMinesNumber';

const minesCount = 99;

const generateHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const minesCount = document.createElement('p');
  minesCount.classList.add('mines-count');
  minesCount.textContent = 'Mines count: 10';

  const btn = document.createElement('btn');
  btn.classList.add('btn');
  btn.textContent = 'reset';

  const timer = document.createElement('p');
  timer.classList.add('timer');
  timer.textContent = 'timer: 10 sec';

  header.append(minesCount);
  header.append(btn);
  header.append(timer);

  return header;
};

const generateMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');

  const board = document.createElement('div');
  board.classList.add('board');

  for (let i = 0; i < 100; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.append(cell);
  }

  main.append(board);

  return main;
};

const generatePage = () => {
  document.body.append(generateHeader());
  document.body.append(generateMain());

  const board = document.querySelector('.board');

  const firstStep = (event) => {
    board.removeEventListener('click', firstStep);
    generateMines(minesCount, event);
    addMinesNumber();
  };

  board.addEventListener('click', firstStep);
  board.addEventListener('click', openCell);
  board.addEventListener('click', gameOver);

  document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('header').remove();
    document.querySelector('main').remove();
    generatePage();
  });
};

export default generatePage;
