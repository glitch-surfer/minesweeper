import './styles/style.scss';
import generatePage from './scripts/generatePage';
import generateMines from './scripts/generateMines';
import gameOver from './scripts/gameOver';
import openCell from './scripts/openCell';
import addMinesNumber from './scripts/addMinesNumber';

const minesCount = 99;

generatePage();

const board = document.querySelector('.board');
const firstStep = (event) => {
  board.removeEventListener('click', firstStep);
  generateMines(minesCount, event);
  addMinesNumber();
};

board.addEventListener('click', firstStep);

board.addEventListener('click', openCell);
board.addEventListener('click', gameOver);
