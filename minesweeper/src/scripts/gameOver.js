import openCell from './openCell';

const gameOver = (event) => {
  if (event.target.classList.contains('bomb')) {
    const bombs = document.querySelectorAll('.bomb');

    bombs.forEach((item) => {
      const mine = item;
      mine.style.opacity = '1';
    });

    const text = document.querySelector('.mines-count');
    text.textContent = 'YOU LOSE!';
    text.style.color = 'red';
    document.querySelector('.board').removeEventListener('click', openCell);
  }
};

export default gameOver;
