import openCell from './openCell';
import saveGame from './saveGame';
import setFlag from './setFlag';
import setResult from './setResult';
import generateOverlay from './generateOverlay';
import createElementWithConfig from './createElementWithConfig';

const generateMessage = (result) => {
  generateOverlay();
  const overlay = document.querySelector('.overlay');

  const wraperConfig = {
    tagName: 'div',
    classes: ['modal', 'gameover-message'],
  };
  const wraper = createElementWithConfig(wraperConfig);

  const modalBtnConfig = {
    tagName: 'button',
    classes: ['btn-modal'],
    textContent: '✖',
  };
  const modalBtn = createElementWithConfig(modalBtnConfig);
  wraper.append(modalBtn);

  const textConfig = {
    tagName: 'p',
    classes: ['about__text'],
    textContent: `${result}`,
  };
  const text = createElementWithConfig(textConfig);
  wraper.append(text);

  overlay.append(wraper);
};

const gameOver = (event) => {
  const btn = document.querySelector('.btn');

  const soundSwitcher = document.querySelector('.sound-switcher');

  if (event.target.textContent !== '🚩') {
    if (event.target.classList.contains('isBomb')) {
      const bombs = [...document.querySelectorAll('.cell')].filter((item) => item.classList.contains('isBomb'));
      const result = 'Game over. Try again';
      bombs.forEach((item) => {
        const bomb = document.createElement('div');
        bomb.classList.add('bomb');
        item.classList.add('is-open');
        item.textContent = '';
        item.append(bomb);
      });
      if (soundSwitcher.checked) {
        new Audio('../src/assets/sounds/bomb.mp3').play();
      }
      event.target.firstElementChild.style.backgroundColor = 'red';

      clearInterval(document.timer);
      btn.textContent = '😩';
      generateMessage(result);
      removeListeners();
    } else {
      const cells = document.querySelectorAll('.cell');
      const closedCells = [...cells].filter((item) => !item.classList.contains('is-open'));
      const movesCount = document.querySelector('.moves-count').textContent.slice(11);
      const time = document.querySelector('.timer').textContent.slice(7);
      const result = `Hooray! You found all mines in ${time} and ${movesCount} moves!`;

      if (closedCells.length === document.minesCount) {
        if (soundSwitcher.checked) {
          new Audio('../src/assets/sounds/win.mp3').play();
        }
        clearInterval(document.timer);
        btn.textContent = '🤩';
        document.body.classList.add('win');

        removeListeners();
        setResult();
        generateMessage(result);
      }
    }
  }
};

function removeListeners() {
  const board = document.querySelector('.board');

  board.removeEventListener('click', openCell);
  board.removeEventListener('contextmenu', setFlag);
  board.removeEventListener('click', gameOver);
  board.removeEventListener('click', saveGame);
}

export default gameOver;
