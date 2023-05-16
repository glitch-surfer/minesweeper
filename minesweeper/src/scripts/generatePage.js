import gameOver from './gameOver';
import openCell from './openCell';
import setFlag from './setFlag';
import switchTheme from './swithTheme';
import firstStep from './firstStep';
import generateHeader from './generateHeader';
import generateMain from './generateMain';
import { generateModal } from './popUp';

const generatePage = () => {
  document.movesCount = 0;

  document.body.append(generateHeader());
  document.body.append(generateMain());

  //
  const resultsBtn = document.createElement('button');
  resultsBtn.classList.add('btn-results');
  resultsBtn.textContent = 'results';
  document.body.append(resultsBtn);
  resultsBtn.addEventListener('click', generateModal);
  //

  const board = document.querySelector('.board');

  board.addEventListener('click', firstStep);
  board.addEventListener('click', openCell);
  board.addEventListener('click', gameOver);
  board.addEventListener('contextmenu', setFlag);
  document.querySelector('label > .theme-switcher').addEventListener('click', switchTheme);

  document.querySelector('.btn').addEventListener('click', () => {
    clearInterval(document.timer);
    document.querySelector('header').remove();
    document.querySelector('main').remove();
    generatePage();
  });
};

export default generatePage;
