import playClickSound from './playClickSound';

const saveGame = () => {
  if (!document.querySelector('.bomb')
  && !document.body.classList.contains('win')
  && document.querySelector('.isBomb')) {
    playClickSound();

    const main = document.querySelector('.main');
    const html = main.innerHTML;
    const layoutState = [...document.body.classList];
    const timer = parseInt(document.querySelector('.timer').textContent.slice(6), 10);
    const {
      boardSize,
      minesCount,
      movesCount,
      flagCount,
    } = document;

    const savedData = {
      html,
      layoutState,
      boardSize,
      minesCount,
      movesCount,
      flagCount,
      timer,
    };

    const jsonData = JSON.stringify(savedData);
    localStorage.setItem('savedGame', jsonData);
  }
};

export default saveGame;
