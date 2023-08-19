import generateBoard from './generateBoard';

const resetGame = () => {
  clearInterval(document.timer);
  document.querySelector('.timer').textContent = 'Timer: 0 sec';
  document.querySelector('main').remove();
  document.body.classList.remove('win');
  generateBoard();
};

export default resetGame;
