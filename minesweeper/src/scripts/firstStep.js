import generateMines from './generateMines';
import addMinesNumber from './addMinesNumber';
import setTimer from './timer';

const firstStep = (event) => {
  const board = document.querySelector('.board');

  board.removeEventListener('click', firstStep);
  generateMines(document.minesCount, event);
  addMinesNumber();
  setTimer();
  document.querySelector('.btn').textContent = '😎';
};

export default firstStep;
