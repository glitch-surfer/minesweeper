import openCell from './openCell';

const gameOver = (event) => {
  const btn = document.querySelector('.btn');
  if (event.target.classList.contains('bomb')) {
    const bombs = document.querySelectorAll('.bomb');

    bombs.forEach((item) => {
      const mine = item;
      mine.style.opacity = '1';
    });
    clearInterval(document.timer);
    btn.textContent = '😩';
    document.querySelector('.board').removeEventListener('click', openCell);
  } else {
    const cells = document.querySelectorAll('.cell');
    const closedCells = [...cells].filter((item) => !item.isOpen);
    if (closedCells.length === 10) {
      btn.textContent = '🤩';
      document.querySelector('.header').style.color = 'green';
      clearInterval(document.timer);
      document.querySelector('.board').removeEventListener('click', openCell);
      document.querySelector('.board').removeEventListener('click', gameOver);
    }
  }
};

export default gameOver;
