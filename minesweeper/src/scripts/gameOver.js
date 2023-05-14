import openCell from './openCell';

const gameOver = (event) => {
  const text = document.querySelector('.mines-count');
  if (event.target.classList.contains('bomb')) {
    const bombs = document.querySelectorAll('.bomb');

    bombs.forEach((item) => {
      const mine = item;
      mine.style.opacity = '1';
    });
    clearInterval(document.timer);
    /* text.textContent = 'YOU LOSE!';
    text.style.color = 'red'; */
    document.querySelector('.board').removeEventListener('click', openCell);
  } else {
    const cells = document.querySelectorAll('.cell');
    const closedCells = [...cells].filter((item) => !item.isOpen);
    if (closedCells.length === 10) {
      /* text.textContent = 'YOU WIN!';
      text.style.color = 'green'; */
      clearInterval(document.timer);
    }
  }
};

export default gameOver;
