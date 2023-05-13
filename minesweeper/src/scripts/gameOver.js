const gameOver = (event) => {
  if (event.target.classList.contains('bomb')) {
    const bomb = document.querySelectorAll('.bomb');

    bomb.forEach((item) => {
      const mine = item;
      mine.style.opacity = '1';
    });

    const text = document.querySelector('.mines-count');
    text.textContent = 'YOU LOSE!';
    text.style.color = 'red';
  }
};

export default gameOver;
