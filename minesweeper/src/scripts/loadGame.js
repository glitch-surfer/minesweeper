import resetGame from './resetGame';
import openCell from './openCell';
import setFlag from './setFlag';
import gameOver from './gameOver';
import setTimer from './timer';

const loadGame = () => {
  if (localStorage.getItem('savedGame')) {
    clearInterval(document.timer);

    const savedJson = localStorage.getItem('savedGame');
    const {
      html,
      layoutState,
      boardSize,
      minesCount,
      movesCount,
      flagCount,
      timer,
    } = JSON.parse(savedJson);

    document.minesCount = minesCount;
    document.boardSize = boardSize;
    document.movesCount = movesCount;
    document.flagCount = flagCount;

    const main = document.querySelector('main');
    main.innerHTML = html;
    document.body.className = layoutState.join(' ');

    const board = document.getElementById('board');
    board.addEventListener('click', openCell);
    board.addEventListener('click', gameOver);
    board.addEventListener('contextmenu', setFlag);
    document.querySelector('.btn').addEventListener('click', resetGame);

    document.querySelector('.mine-counter-selector').value = minesCount;
    setTimer(timer);
  }
};

export default loadGame;
