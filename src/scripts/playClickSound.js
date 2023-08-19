const playClickSound = () => {
  if (document.querySelector('.sound-switcher').checked) {
    new Audio('../src/assets/sounds/click.mp3').play();
  }
};

export default playClickSound;
