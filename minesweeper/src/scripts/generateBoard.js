import gameOver from './gameOver';
import openCell from './openCell';
import setFlag from './setFlag';
import firstStep from './firstStep';
import generateControlsPanel from './generateControlsPanel';
import generateMain from './generateMain';

const generateBoard = () => {
  document.movesCount = 0;

  const main = generateMain();
  /* document.body.append(generateHeader()); */
  main.prepend(generateControlsPanel());
  document.body.append(main);

  const board = document.getElementById('board');

  board.addEventListener('click', firstStep);
  board.addEventListener('click', openCell);
  board.addEventListener('click', gameOver);
  board.addEventListener('contextmenu', setFlag);

  const resetGame = () => {
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
