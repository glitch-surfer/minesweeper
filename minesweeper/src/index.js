import './styles/style.scss';
import generatePage from './scripts/generatePage';
import generateMines from './scripts/generateMines';
import gameOver from './scripts/gameOver';
import openCell from './scripts/openCell';
import addMinesNumber from './scripts/addMinesNumber';

const minesCount = 20;

generatePage();
generateMines(minesCount);
addMinesNumber();
const board = document.querySelector('.board');

board.addEventListener('click', gameOver);
board.addEventListener('click', openCell);
