import './styles/style.scss';
import generatePage from './scripts/generatePage';
import generateMines from './scripts/generateMines';
import gameOver from './scripts/gameOver';
import openCell from './scripts/openCell';

generatePage();
generateMines();

document.addEventListener('click', gameOver);
document.addEventListener('click', openCell);
