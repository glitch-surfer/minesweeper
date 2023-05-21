import playClickSound from './playClickSound';

const switchTheme = () => {
  playClickSound();

  document.body.classList.toggle('dark-theme');
};

export default switchTheme;
