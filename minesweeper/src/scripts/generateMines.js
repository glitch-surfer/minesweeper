const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomNumberArr = (count) => {
  const arr = [];

  while (arr.length < count) {
    const number = getRandomNumber(0, 100);
    if (!arr.includes(number)) {
      arr.push(number);
    }
  }

  return arr;
};

const generateMines = () => {
  const arr = generateRandomNumberArr(10);
  const btns = document.querySelectorAll('.cell');

  const mindeBtns = [...btns].filter((item, index) => arr.includes(index));

  mindeBtns.forEach((item) => {
    const bomb = document.createElement('div');
    bomb.classList.add('bomb');
    item.append(bomb);
  });
};

export default generateMines;
