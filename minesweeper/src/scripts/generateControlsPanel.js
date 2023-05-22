import createElementWithConfig from './createElementWithConfig';

const generateControlsPanel = () => {
  const controlsPanelConfig = {
    tagName: 'div',
    classes: ['controls-panel'],
  };
  const controlsPanel = createElementWithConfig(controlsPanelConfig);

  const movesCountConfig = {
    tagName: 'p',
    classes: ['moves-count'],
    textContent: 'Your moves: 0',
  };
  const movesCount = createElementWithConfig(movesCountConfig);
  controlsPanel.append(movesCount);

  const btnConfig = {
    tagName: 'button',
    classes: ['btn'],
    textContent: '😉',
  };
  const btn = createElementWithConfig(btnConfig);
  controlsPanel.append(btn);

  document.flagCount = document.minesCount;
  const counterConfig = {
    tagName: 'p',
    classes: ['counter'],
    textContent: `Mines count: ${document.flagCount}`,
  };
  const counter = createElementWithConfig(counterConfig);
  controlsPanel.append(counter);

  return controlsPanel;
};

export default generateControlsPanel;
