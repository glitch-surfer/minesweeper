import './styles/style.scss';
import generateBoard, { addListeners } from './scripts/generateBoard';
import generateSettings from './scripts/generateSettings';
import { generateResultModal } from './scripts/generateResultModal';
import switchTheme from './scripts/swithTheme';
import soundIconSwitcher from './scripts/soundIconSwitcher';
import generateAboutModal from './scripts/generateAboutModal';
import resetGame from './scripts/resetGame';

document.minesCount = 10;
document.boardSize = 10;

document.body.append(generateSettings());
/* if (localStorage.getItem('savedGame')) {
  const savedJson = localStorage.getItem('savedGame');
  const { html } = JSON.parse(savedJson);
  const board = document.createElement('main');
  document.body.append(board);
  board.outerHTML = html;
  addListeners();
  document.querySelector('.btn').addEventListener('click', resetGame);
} else { generateBoard(); } */

generateBoard()

document.querySelector('.theme-switcher').addEventListener('click', switchTheme);
document.querySelector('.btn-results').addEventListener('click', generateResultModal);
document.querySelector('.about__btn').addEventListener('click', generateAboutModal);
document.querySelector('label').addEventListener('click', soundIconSwitcher);
/* document.querySelector('header').addEventListener('click', modeSwitcher); */

/* document.addEventListener('click', firstStep); */
