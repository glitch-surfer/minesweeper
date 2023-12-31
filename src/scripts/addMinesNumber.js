export const createMatrix = () => {
  const matrix = [];
  const cells = document.querySelectorAll('.cell');
  const matrixLineLength = Math.sqrt(cells.length);

  for (let i = 0; i < cells.length; i += matrixLineLength) {
    const matrixLine = [];

    for (let j = 0; j < matrixLineLength; j += 1) {
      matrixLine.push(cells[i + j]);
    }

    matrix.push(matrixLine);
  }
  return matrix;
};

const getSurround = () => {
  const matrix = createMatrix();
  const surroundMinesCount = [];
  for (let y = 0; y < matrix[0].length; y += 1) {
    for (let x = 0; x < matrix[0].length; x += 1) {
      const arr = [];
      // test [y]?. -unnecessary ?.
      arr.push(matrix[y - 1]?.[x]);
      arr.push(matrix[y - 1]?.[x + 1]);
      arr.push(matrix[y - 1]?.[x - 1]);
      arr.push(matrix[y]?.[x + 1]);
      arr.push(matrix[y]?.[x - 1]);
      arr.push(matrix[y + 1]?.[x + 1]);
      arr.push(matrix[y + 1]?.[x]);
      arr.push(matrix[y + 1]?.[x - 1]);
      surroundMinesCount.push(arr
        .filter((item) => item && item.classList.contains('isBomb')).length);
    }
  }

  return surroundMinesCount;
};

const addMinesNumber = () => {
  const cells = document.querySelectorAll('.cell');
  const surroundMinesCount = getSurround();

  cells.forEach((item, index) => {
    const cell = item;
    if (!cell.classList.contains('isBomb') && surroundMinesCount[index]) {
      cell.dataset.number = surroundMinesCount[index];
    }
  });
};

export default addMinesNumber;
