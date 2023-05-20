import resetGame from './resetGame';

const modeHandler = (event) => {
  if (event.target.classList.contains('easy-mode')) {
    document.boardSize = 10;
    document.body.classList.remove('medium-layout');
    document.body.classList.remove('suicide-layout');
    document.querySelector('.mine-counter-selector').value = 10;
    document.minesCount = 10;
    resetGame();
  } else if (event.target.classList.contains('medium-mode')) {
    document.boardSize = 15;
    document.body.classList.remove('suicide-layout');
    document.body.classList.add('medium-layout');
    document.querySelector('.mine-counter-selector').value = 25;
    document.minesCount = 25;
    resetGame();
  } else if (event.target.classList.contains('suicide-mode')) {
    document.boardSize = 25;
    document.body.classList.remove('medium-layout');
    document.body.classList.add('suicide-layout');
    document.querySelector('.mine-counter-selector').value = 99;
    document.minesCount = 99;
    resetGame();
  }
};

export default modeHandler;
