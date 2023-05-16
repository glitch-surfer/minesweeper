import openCell from './openCell';
import setFlag from './setFlag';

export const setResultList = () => {
  const gameId = +localStorage.getItem('gameId') + 1 || 1;

  if (gameId > 10) {
    localStorage.removeItem(`${gameId - 10}`);
  }
  localStorage.setItem(gameId, `Game #${gameId} ____ Time: ${document.querySelector('.timer').textContent.slice(7)} ____ Moves: ${document.querySelector('.moves-count').textContent.slice(11)}`);

  localStorage.setItem('gameId', gameId);
};

const gameOver = (event) => {
  const btn = document.querySelector('.btn');
  const board = document.querySelector('.board');

  if (event.target.textContent !== '🚩') {
    if (event.target.isBomb) {
      const bombs = [...document.querySelectorAll('.cell')].filter((item) => item.isBomb);

      bombs.forEach((item) => {
        const bomb = document.createElement('div');
        bomb.classList.add('bomb');
        item.classList.add('is-open');
        item.textContent = '';
        item.append(bomb);
      });
      if (document.querySelector('.sound-switcher').checked) {
        new Audio('../src/assets/sounds/bomb.mp3').play();
      }
      event.target.firstElementChild.style.backgroundColor = 'red';

      clearInterval(document.timer);
      btn.textContent = '😩';

      board.removeEventListener('click', openCell);
      board.removeEventListener('contextmenu', setFlag);
      board.removeEventListener('click', gameOver);
    } else {
      const cells = document.querySelectorAll('.cell');
      const closedCells = [...cells].filter((item) => !item.isOpen);

      if (closedCells.length === document.minesCount) {
        if (document.querySelector('.sound-switcher').checked) {
          new Audio('../src/assets/sounds/win.mp3').play();
        }
        clearInterval(document.timer);
        btn.textContent = '🤩';
        document.body.classList.add('win');

        board.removeEventListener('click', openCell);
        board.removeEventListener('click', gameOver);
        board.removeEventListener('contextmenu', setFlag);

        setResultList();
      }
    }
  }
};

export default gameOver;
