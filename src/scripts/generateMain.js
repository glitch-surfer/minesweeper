import createElementWithConfig from './createElementWithConfig';

const generateMain = () => {
  const mainConfig = {
    tagName: 'main',
    classes: ['main'],
  };
  const main = createElementWithConfig(mainConfig);

  const boardConfig = {
    tagName: 'div',
    classes: ['board'],
    attributes: {
      id: 'board',
    },
  };
  const board = createElementWithConfig(boardConfig);

  const cellConfig = {
    tagName: 'div',
    classes: ['cell'],
  };
  for (let i = 0; i < document.boardSize ** 2; i += 1) {
    const cell = createElementWithConfig(cellConfig);
    board.append(cell);
  }

  main.append(board);

  return main;
};

export default generateMain;
