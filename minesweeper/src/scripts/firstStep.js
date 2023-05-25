import generateMines from './generateMines';
import addMinesNumber from './addMinesNumber';
import setTimer from './timer';
import openCell from './openCell';

const firstStep = (event) => {
  if (event.target.textContent !== '🚩') {
    const board = document.querySelector('.board');
    board.removeEventListener('pointerdown', firstStep);
    generateMines(document.minesCount, event);
    addMinesNumber();
    setTimer();
    document.querySelector('.btn').textContent = '😎';
    openCell(event);
  }
};

export default firstStep;
