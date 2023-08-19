import playClickSound from './playClickSound';

const switchTheme = (event) => {
  playClickSound();
  event.target.classList.toggle('is-dark');
  document.body.classList.toggle('dark-theme');
};

export default switchTheme;
