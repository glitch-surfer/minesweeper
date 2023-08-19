import './styles/style.scss';
import generateBoard from './scripts/generateBoard';
import generateSettings from './scripts/generateSettings';
import generateResultModal from './scripts/generateResultModal';
import generateAboutModal from './scripts/generateAboutModal';
import switchTheme from './scripts/swithTheme';
import soundIconSwitcher from './scripts/soundIconSwitcher';
import resetGame from './scripts/resetGame';
import modeHandler from './scripts/modeHandler';
import saveGame from './scripts/saveGame';
import loadGame from './scripts/loadGame';

const handleMineCountChange = (event) => {
  document.querySelector('.counter').textContent = `Mines count: ${event.target.value}`;
  document.minesCount = +event.target.value;
  resetGame();
};

document.minesCount = 10;
document.boardSize = 10;
// init
document.body.append(generateSettings());
generateBoard();
// switchers
document.querySelector('.theme-switcher').addEventListener('click', switchTheme);
document.querySelector('label').addEventListener('click', soundIconSwitcher);
// generate modal
document.querySelector('.btn-results').addEventListener('click', generateResultModal);
document.querySelector('.about__btn').addEventListener('click', generateAboutModal);
// mode settings
document.querySelector('.mine-counter-selector').addEventListener('input', handleMineCountChange);
document.querySelector('.mode').addEventListener('click', modeHandler);
document.querySelector('.save').addEventListener('click', saveGame);
document.querySelector('.load').addEventListener('click', loadGame);
