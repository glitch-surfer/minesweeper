import gameOver from './gameOver';
import openCell from './openCell';
import setFlag from './setFlag';
import firstStep from './firstStep';
import generateHeader from './generateHeader';
import generateMain from './generateMain';

const generateBoard = () => {
  document.movesCount = 0;

  document.body.append(generateHeader());
  document.body.append(generateMain());

  const board = document.getElementById('board');

  board.addEventListener('click', firstStep);
  board.addEventListener('click', openCell);
  board.addEventListener('click', gameOver);
  board.addEventListener('contextmenu', setFlag);

  // reset game
  document.querySelector('.btn').addEventListener('click', () => {
    clearInterval(document.timer);
    document.querySelector('header').remove();
    document.querySelector('main').remove();
    document.body.classList.remove('win');
    generateBoard();
  });
};

export default generateBoard;
