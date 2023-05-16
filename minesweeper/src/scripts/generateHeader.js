const generateHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const movesCount = document.createElement('p');
  movesCount.classList.add('moves-count');
  movesCount.textContent = 'Your moves: 0';
  header.append(movesCount);

  const btn = document.createElement('btn');
  btn.classList.add('btn');
  btn.textContent = '😉';
  header.append(btn);

  document.flagCount = document.minesCount;
  const counter = document.createElement('p');
  counter.classList.add('counter');
  counter.textContent = `Mines count: ${document.flagCount}`;
  header.append(counter);

  return header;
};

export default generateHeader;
