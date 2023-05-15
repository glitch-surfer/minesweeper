const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomNumberArr = (length, exclude) => {
  const arr = [];

  while (arr.length < length) {
    const number = getRandomNumber(0, 99);
    if (!arr.includes(number) && number !== exclude) {
      arr.push(number);
    }
  }
  return arr;
};

const generateMines = (minesCount, event) => {
  // minesCount shoul be Math.sqrt(cells) or change generateRandomNumberArr func
  const cells = document.querySelectorAll('.cell');
  const firstClick = [...cells].findIndex((item) => item === event.target);
  const randomNumberArr = generateRandomNumberArr(minesCount, firstClick);

  const minedCells = [...cells].filter((item, index) => randomNumberArr.includes(index));

  minedCells.forEach((item) => item.isBomb = true);
};

export default generateMines;
