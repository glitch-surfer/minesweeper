import './styles/style.scss';
import generateBoard from './scripts/generateBoard';
import generateSettings from './scripts/generateSettings';
import { generateModal } from './scripts/popUp';
import switchTheme from './scripts/swithTheme';
import soundIconSwitcher from './scripts/soundIconSwitcher';

document.minesCount = 10;
document.boardSize = 10;

document.body.append(generateSettings());
generateBoard();

document.querySelector('.theme-switcher').addEventListener('click', switchTheme);
document.querySelector('.btn-results').addEventListener('click', generateModal);
document.querySelector('label').addEventListener('click', soundIconSwitcher);
/* document.querySelector('header').addEventListener('click', modeSwitcher); */

/* document.addEventListener('click', firstStep); */
