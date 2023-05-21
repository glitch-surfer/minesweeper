const setResult = () => {
  const gameId = +localStorage.getItem('gameId') + 1 || 1;
  const mode = document.body.classList.value.includes('layout')
    ? document.body.classList.value.split(' ')[0].slice(0, 7)
    : 'easy';
  if (gameId > 10) {
    localStorage.removeItem(`${gameId - 10}`);
  }
  localStorage.setItem(gameId, `Game #${gameId} _ Mode: ${mode} _ Time: ${document.querySelector('.timer').textContent.slice(7)} _ Moves: ${document.querySelector('.moves-count').textContent.slice(11)}`);

  localStorage.setItem('gameId', gameId);
};

export default setResult;
