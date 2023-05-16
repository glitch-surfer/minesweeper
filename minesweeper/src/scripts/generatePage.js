import generateMines from './generateMines';
import gameOver from './gameOver';
import openCell from './openCell';
import addMinesNumber from './addMinesNumber';
import setTimer from './timer';
import setFlag from './setFlag';

document.minesCount = 10;

const generateHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const soundSwitcherWrapper = document.createElement('label');
  const soundSwitcher = document.createElement('input');
  soundSwitcher.setAttribute('type', 'checkbox');
  soundSwitcher.setAttribute('checked', 'true');
  soundSwitcher.classList.add('sound-switcher');
  soundSwitcherWrapper.append(soundSwitcher);

  const themeSwitcherWrapper = document.createElement('label');
  const themeSwitcher = document.createElement('input');
  themeSwitcher.setAttribute('type', 'checkbox');
  themeSwitcher.classList.add('theme-switcher');
  themeSwitcherWrapper.append(themeSwitcher);

  const movesCount = document.createElement('p');
  movesCount.classList.add('moves-count');
  movesCount.textContent = 'Your moves: 0';

  const btn = document.createElement('btn');
  btn.classList.add('btn');
  btn.textContent = '😉';

  const timer = document.createElement('p');
  timer.classList.add('timer');
  timer.textContent = 'Timer: 0 sec';

  document.flagCount = document.minesCount;
  const counter = document.createElement('p');
  counter.classList.add('counter');
  counter.textContent = `Mines count: ${document.flagCount}`;

  header.append(movesCount);
  header.append(btn);
  header.append(counter);
  header.append(timer);
  header.append(soundSwitcherWrapper);
  header.append(themeSwitcherWrapper);

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
    generateMines(document.minesCount, event);
    addMinesNumber();
    setTimer();
    document.querySelector('.btn').textContent = '😎';
  };

  board.addEventListener('click', firstStep);
  board.addEventListener('click', openCell);
  board.addEventListener('click', gameOver);
  board.addEventListener('contextmenu', setFlag);
  document.querySelector('label > .theme-switcher').addEventListener('click', (event) => {
    if (event.target.checked) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  });

  document.querySelector('.btn').addEventListener('click', () => {
    clearInterval(document.timer);
    document.querySelector('header').remove();
    document.querySelector('main').remove();
    generatePage();
  });
};

export default generatePage;
