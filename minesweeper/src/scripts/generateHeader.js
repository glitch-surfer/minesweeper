const generateHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const soundSwitcherWrapper = document.createElement('label');
  const soundSwitcher = document.createElement('input');
  soundSwitcher.setAttribute('type', 'checkbox');
  soundSwitcher.setAttribute('checked', 'true');
  soundSwitcher.classList.add('sound-switcher');
  soundSwitcherWrapper.append(soundSwitcher);

  const themeSwitcherWrapper = document.createElement('label');
  const themeSwitcher = document.createElement('input');
  themeSwitcher.setAttribute('type', 'checkbox');
  themeSwitcher.classList.add('theme-switcher');
  themeSwitcherWrapper.append(themeSwitcher);

  const movesCount = document.createElement('p');
  movesCount.classList.add('moves-count');
  movesCount.textContent = 'Your moves: 0';

  const btn = document.createElement('btn');
  btn.classList.add('btn');
  btn.textContent = '😉';

  const timer = document.createElement('p');
  timer.classList.add('timer');
  timer.textContent = 'Timer: 0 sec';

  document.flagCount = document.minesCount;
  const counter = document.createElement('p');
  counter.classList.add('counter');
  counter.textContent = `Mines count: ${document.flagCount}`;

  header.append(movesCount);
  header.append(btn);
  header.append(counter);
  header.append(timer);
  header.append(soundSwitcherWrapper);
  header.append(themeSwitcherWrapper);

  return header;
};

export default generateHeader;
