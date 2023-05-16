const generateSettings = () => {
  const settingsContainer = document.createElement('div');
  settingsContainer.classList.add('settings');
  settingsContainer.classList.add('header');

  const resultsBtn = document.createElement('button');
  resultsBtn.classList.add('btn-results');
  resultsBtn.textContent = 'results';
  settingsContainer.append(resultsBtn);

  const timer = document.createElement('p');
  timer.classList.add('timer');
  timer.textContent = 'Timer: 0 sec';
  settingsContainer.append(timer);

  const mineCountSelector = document.createElement('input');
  mineCountSelector.setAttribute('type', 'number');
  mineCountSelector.setAttribute('placeholder', 'mines of board');
  mineCountSelector.setAttribute('min', '10');
  mineCountSelector.setAttribute('max', '99');
  /* mineCountSelector.textContent = 'Timer: 0 sec'; */
  settingsContainer.append(mineCountSelector);

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

  return settingsContainer;
};

export default generateSettings;
