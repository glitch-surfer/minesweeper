const generateMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');

  const board = document.createElement('div');
  board.classList.add('board');
  board.setAttribute('id', 'board');

  for (let i = 0; i < 100; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.append(cell);
  }

  main.append(board);

  return main;
};

export default generateMain;
