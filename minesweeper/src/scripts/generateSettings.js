import resetGame from './resetGame';
import modeHandler from './modeHandler';
import saveGame from './saveGame';
import loadGame from './loadGame';

const generateSettings = () => {
  const loadGameContainer = document.createElement('div');
  loadGameContainer.classList.add('load-game-container');

  const save = document.createElement('button');
  save.textContent = 'Save';
  save.classList.add('save');
  save.addEventListener('click', saveGame);
  loadGameContainer.append(save);

  const load = document.createElement('button');
  load.textContent = 'Load';
  load.classList.add('load');
  load.addEventListener('click', loadGame);
  loadGameContainer.append(load);

  const about = document.createElement('button');
  about.textContent = 'About';
  about.classList.add('about__btn');
  loadGameContainer.append(about);

  const modeContainer = document.createElement('div');
  modeContainer.classList.add('mode');
  modeContainer.addEventListener('click', modeHandler);

  const easyMode = document.createElement('button');
  easyMode.textContent = 'Easy';
  easyMode.classList.add('easy-mode');
  modeContainer.append(easyMode);

  const mediumMode = document.createElement('button');
  mediumMode.textContent = 'Medium';
  mediumMode.classList.add('medium-mode');
  modeContainer.append(mediumMode);

  const suicideMode = document.createElement('button');
  suicideMode.textContent = 'Suicide';
  suicideMode.classList.add('suicide-mode');
  modeContainer.append(suicideMode);

  const mineCountDisplay = document.createElement('p');
  mineCountDisplay.classList.add('settings-subtitle');
  mineCountDisplay.textContent = 'Mines:';
  modeContainer.append(mineCountDisplay);

  const mineCountSelector = document.createElement('input');
  mineCountSelector.classList.add('mine-counter-selector');
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
  header.append(loadGameContainer);
  header.append(modeContainer);
  header.append(settingsContainer);
  return header;
};

export default generateSettings;
