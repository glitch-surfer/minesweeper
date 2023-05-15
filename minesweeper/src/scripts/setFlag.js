const setFlag = (event) => {
  const cell = event.target;
  const counter = document.querySelector('.counter');
  event.preventDefault();
  if (cell.classList.contains('cell') && !cell.isOpen) {
    if (!cell.closest('.cell').textContent) {
      cell.textContent = '🚩';
      document.flagCount -= 1;
      counter.textContent = `Mines count: ${document.flagCount}`;
    } else {
      cell.textContent = '';
      document.flagCount += 1;
      counter.textContent = `Mines count: ${document.flagCount}`;
    }
  }
};

export default setFlag;
