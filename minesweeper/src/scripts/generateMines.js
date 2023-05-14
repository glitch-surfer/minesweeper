const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomNumberArr = (count) => {
  const arr = [];

  while (arr.length < count) {
    const number = getRandomNumber(0, count * count);
    if (!arr.includes(number)) {
      arr.push(number);
    }
  }
  return arr;
};

const generateMines = (minesCount) => {
  // minesCount shoul be Math.sqrt(cells) or change generateRandomNumberArr func
  const randomNumberArr = generateRandomNumberArr(minesCount);
  const cells = document.querySelectorAll('.cell');

  const minedBtns = [...cells].filter((item, index) => randomNumberArr.includes(index));

  minedBtns.forEach((item) => {
    const bomb = document.createElement('div');
    bomb.classList.add('bomb');
    item.append(bomb);
  });
};

export default generateMines;
