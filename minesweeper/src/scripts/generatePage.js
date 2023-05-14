import generateMines from './generateMines';
import gameOver from './gameOver';
import openCell from './openCell';
import addMinesNumber from './addMinesNumber';
import setTimer from './timer';

let minesCount = 10;

const generateHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const movesCount = document.createElement('p');
  movesCount.classList.add('moves-count');
  movesCount.textContent = 'Your moves: 0';

  const btn = document.createElement('btn');
  btn.classList.add('btn');
  btn.textContent = 'reset';

  const timer = document.createElement('p');
  timer.classList.add('timer');
  timer.textContent = 'Timer: 0 sec';

  header.append(movesCount);
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
  document.movesCount = 0;
  document.body.append(generateHeader());
  document.body.append(generateMain());

  const board = document.querySelector('.board');

  const firstStep = (event) => {
    board.removeEventListener('click', firstStep);
    generateMines(minesCount, event);
    addMinesNumber();
    setTimer();
  };

  board.addEventListener('click', firstStep);
  board.addEventListener('click', openCell);
  board.addEventListener('click', gameOver);

  document.querySelector('.btn').addEventListener('click', () => {
    clearInterval(document.timer);
    document.querySelector('header').remove();
    document.querySelector('main').remove();
    generatePage();
  });
};

export default generatePage;
