const setFlag = (event) => {
  const cell = event.target;
  event.preventDefault();
  if (cell.classList.contains('cell') && !cell.isOpen) {
    if (!cell.closest('.cell').textContent) {
      cell.textContent = '🚩';
    } else {
      cell.textContent = '';
    }
  }
};

export default setFlag;
