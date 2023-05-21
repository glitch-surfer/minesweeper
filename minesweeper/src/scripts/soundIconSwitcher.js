import playClickSound from './playClickSound';

const soundIconSwitcher = (event) => {
  playClickSound();

  const label = event.target;
  if (document.querySelector('.sound-switcher').checked) {
    label.textContent = '🔕';
  } else {
    label.textContent = '🔔';
  }
};

export default soundIconSwitcher;
