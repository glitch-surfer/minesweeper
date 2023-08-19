import gameOver from './gameOver';
import openCell from './openCell';
import setFlag from './setFlag';
import firstStep from './firstStep';
import generateControlsPanel from './generateControlsPanel';
import generateMain from './generateMain';
import playClickSound from './playClickSound';

export const addListeners = () => {
  const board = document.getElementById('board');

  board.addEventListener('click', firstStep);
  board.addEventListener('click', openCell);
  board.addEventListener('click', gameOver);
  board.addEventListener('contextmenu', setFlag);
};

const generateBoard = () => {
  document.movesCount = 0;

  const main = generateMain();
  main.prepend(generateControlsPanel());
  document.body.append(main);

  addListeners();

  const resetGame = () => {
    playClickSound();

    clearInterval(document.timer);
    document.querySelector('.timer').textContent = 'Timer: 0 sec';
    document.querySelector('main').remove();
    document.body.classList.remove('win');
    generateBoard();
  };
  // reset game
  document.querySelector('.btn').addEventListener('click', resetGame);
};

export default generateBoard;
