import resetGame from './resetGame';
import modeSwitcher from './modeSwitcher';

const generateSettings = () => {
  const modeContainer = document.createElement('div');
  modeContainer.classList.add('mode');
  modeContainer.addEventListener('click', modeSwitcher);

  const easyMode = document.createElement('span');
  easyMode.textContent = 'Ease';
  easyMode.classList.add('easy-mode');
  modeContainer.append(easyMode);

  const mediumMode = document.createElement('span');
  mediumMode.textContent = 'Medium';
  mediumMode.classList.add('medium-mode');
  modeContainer.append(mediumMode);

  const suicideMode = document.createElement('span');
  suicideMode.textContent = 'Suicide';
  suicideMode.classList.add('suicide-mode');
  modeContainer.append(suicideMode);

  const mineCountDisplay = document.createElement('span');
  mineCountDisplay.textContent = 'Mines:';
  modeContainer.append(mineCountDisplay);

  const mineCountSelector = document.createElement('input');
  mineCountSelector.setAttribute('type', 'range');
  mineCountSelector.setAttribute('value', '10');
  mineCountSelector.setAttribute('min', '10');
  mineCountSelector.setAttribute('max', '99');
  mineCountSelector.addEventListener('input', (event) => {
    document.querySelector('.counter').textContent = `Mines count: ${event.target.value}`;
    document.minesCount = +event.target.value;
    resetGame();
  });
  modeContainer.append(mineCountSelector);

  const settingsContainer = document.createElement('div');
  settingsContainer.classList.add('settings');
  settingsContainer.classList.add('controls-panel');

  const resultsBtn = document.createElement('button');
  resultsBtn.classList.add('btn-results');
  resultsBtn.textContent = 'results';
  settingsContainer.append(resultsBtn);

  const timer = document.createElement('p');
  timer.classList.add('timer');
  timer.textContent = 'Timer: 0 sec';
  settingsContainer.append(timer);

  const soundSwitcherWrapper = document.createElement('label');
  const labelText = document.createElement('span');
  labelText.textContent = '🔔';
  soundSwitcherWrapper.append(labelText);
  const soundSwitcher = document.createElement('input');
  soundSwitcher.setAttribute('type', 'checkbox');
  soundSwitcher.setAttribute('checked', 'true');
  soundSwitcher.classList.add('sound-switcher');
  soundSwitcherWrapper.append(soundSwitcher);
  settingsContainer.append(soundSwitcherWrapper);

  const themeSwitcher = document.createElement('button');
  themeSwitcher.classList.add('theme-switcher');
  settingsContainer.append(themeSwitcher);
  themeSwitcher.addEventListener('click', (event) => {
    event.target.classList.toggle('is-dark');
  });

  const header = document.createElement('header');
  header.classList.add('header');
  header.append(modeContainer);
  header.append(settingsContainer);
  return header;
};

export default generateSettings;
