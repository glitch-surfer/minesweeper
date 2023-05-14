import './styles/style.scss';
import generatePage from './scripts/generatePage';
import generateMines from './scripts/generateMines';
import gameOver from './scripts/gameOver';
import openCell from './scripts/openCell';
import addMinesNumber from './scripts/addMinesNumber';

const minesCount = 10;

generatePage();
generateMines(minesCount);
addMinesNumber();

document.addEventListener('click', gameOver);
document.addEventListener('click', openCell);
