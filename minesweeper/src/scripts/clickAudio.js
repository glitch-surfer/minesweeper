const clickAudio = (event) => {
  if (event.target.isOpen && !event.target.isBomb) {
    new Audio('../src/assets/sounds/empty-cell.mp3').play()
  }
};

export default clickAudio;
