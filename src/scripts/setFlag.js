const setFlag = (event) => {
  const cell = event.target;
  const counter = document.querySelector('.counter');
  event.preventDefault();

  if (cell.classList.contains('cell') && !cell.classList.contains('is-open')) {
    const audio = new Audio('../src/assets/sounds/flag.mp3');

    if (!cell.textContent) {
      if (document.querySelector('.sound-switcher').checked) {
        audio.play();
      }

      cell.textContent = '🚩';
      document.flagCount -= 1;
      counter.textContent = `Mines count: ${document.flagCount}`;
    } else {
      if (document.querySelector('.sound-switcher').checked) {
        audio.play();
      }
      cell.textContent = '';
      document.flagCount += 1;
      counter.textContent = `Mines count: ${document.flagCount}`;
    }
  }
};

export default setFlag;
