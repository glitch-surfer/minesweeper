const openCell = (event) => {
  if (event.target.classList.contains('cell')) {
    const cell = event.target;
    cell.style.backgroundColor = 'transparent';
    cell.style.border = '1px solid grey';
    cell.textContent = cell.dataset.number;
  }
};

export default openCell;
