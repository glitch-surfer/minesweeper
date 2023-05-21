const playClickSound = () => {
  const audio = new Audio('../src/assets/sounds/click.mp3');
  if (document.querySelector('.sound-switcher').checked) {
    audio.play();
  }
};

export default playClickSound;
