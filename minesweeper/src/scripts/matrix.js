const createMatrix = () => {
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

  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      const arr = [];
      arr.push(matrix[y - 1]?.[x]);
      arr.push(matrix[y - 1]?.[x + 1]);
      arr.push(matrix[y - 1]?.[x - 1]);
      arr.push(matrix[y]?.[x + 1]);
      arr.push(matrix[y]?.[x - 1]);
      arr.push(matrix[y + 1]?.[x + 1]);
      arr.push(matrix[y + 1]?.[x]);
      arr.push(matrix[y + 1]?.[x - 1]);
      surroundMinesCount.push(arr
        .filter((item) => item)
        .filter((item) => item.childElementCount).length);
    }
  }

  return surroundMinesCount;
};

const addMinesNumber = () => {
  const cells = document.querySelectorAll('.cell');
  const surroundMinesCount = getSurround();

  cells.forEach((item, index) => {
    const cell = item;
    if (!cell.childElementCount) {
      cell.textContent = surroundMinesCount[index];
    }
  });
};

export default addMinesNumber;
