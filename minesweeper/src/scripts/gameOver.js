import openCell from './openCell';
import setFlag from './setFlag';

const gameOver = (event) => {
  const btn = document.querySelector('.btn');
  const board = document.querySelector('.board');

  if (event.target.textContent !== '🚩') {
    if (event.target.isBomb) {
      const bombs = [...document.querySelectorAll('.cell')].filter((item) => item.isBomb);

      bombs.forEach((item) => {
        const bomb = document.createElement('div');
        bomb.classList.add('bomb');
        item.textContent = '';
        item.append(bomb);
      });

      event.target.style.backgroundColor = 'red';

      clearInterval(document.timer);
      btn.textContent = '😩';

      board.removeEventListener('click', openCell);
      board.removeEventListener('contextmenu', setFlag);
      board.removeEventListener('click', gameOver);
    } else {
      const cells = document.querySelectorAll('.cell');
      const closedCells = [...cells].filter((item) => !item.isOpen);

      if (closedCells.length === document.minesCount) {
        clearInterval(document.timer);
        btn.textContent = '🤩';
        document.querySelector('.header').style.color = 'green';

        board.removeEventListener('click', openCell);
        board.removeEventListener('click', gameOver);
        board.removeEventListener('contextmenu', setFlag);
      }
    }
  }
};

export default gameOver;
