import generateOverlay from './generateOverlay';
import playClickSound from './playClickSound';
import createElementWithConfig from './createElementWithConfig';

const getResultList = () => {
  const gameId = +localStorage.getItem('gameId');

  const resultsList = [];
  for (let i = 0; i < 10; i += 1) {
    const item = localStorage.getItem(gameId - i);
    resultsList.push(item);
  }
  return resultsList;
};

const generateResultModal = () => {
  playClickSound();

  generateOverlay();
  const overlay = document.querySelector('.overlay');

  const titleConfig = {
    tagName: 'h2',
    classes: ['modal-title'],
    textContent: 'Latest Results',
  };
  const title = createElementWithConfig(titleConfig);
  overlay.append(title);

  const resultsList = getResultList();

  const listConfig = {
    tagName: 'ul',
    classes: ['modal'],
  };
  const list = createElementWithConfig(listConfig);

  const btnConfig = {
    tagName: 'button',
    classes: ['btn-modal'],
    textContent: '✖',
  };
  const btn = createElementWithConfig(btnConfig);
  list.append(btn);

  resultsList.forEach((item) => {
    const liConfig = {
      tagName: 'li',
      textContent: item,
    };
    const li = createElementWithConfig(liConfig);
    list.append(li);
  });

  overlay.append(list);
};

export default generateResultModal;
