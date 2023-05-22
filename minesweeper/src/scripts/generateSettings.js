import createElementWithConfig from './createElementWithConfig';

const generateSettings = () => {
  const loadGameContainerConfig = {
    tagName: 'div',
    classes: ['load-game-container'],
    children: [
      { tagName: 'button', classes: ['save'], textContent: 'Save' },
      { tagName: 'button', classes: ['load'], textContent: 'Load' },
      { tagName: 'button', classes: ['about__btn'], textContent: 'About' },
    ],
  };

  const modeContainerConfig = {
    tagName: 'div',
    classes: ['mode'],
    children: [
      { tagName: 'button', classes: ['easy-mode'], textContent: 'Easy' },
      { tagName: 'button', classes: ['medium-mode'], textContent: 'Medium' },
      { tagName: 'button', classes: ['suicide-mode'], textContent: 'Suicide' },
      { tagName: 'p', classes: ['settings-subtitle'], textContent: 'Mines:' },
      {
        tagName: 'input',
        classes: ['mine-counter-selector'],
        attributes: {
          type: 'range', value: '10', min: '10', max: '99',
        },
      },
    ],
  };

  const settingsContainerConfig = {
    tagName: 'div',
    classes: ['settings', 'controls-panel'],
    children: [
      { tagName: 'button', classes: ['btn-results'], textContent: 'results' },
      { tagName: 'p', classes: ['timer'], textContent: 'Timer: 0 sec' },
      {
        tagName: 'label',
        children: [
          { tagName: 'span', textContent: '🔔' },
          { tagName: 'input', classes: ['sound-switcher'], attributes: { type: 'checkbox', checked: 'true' } },
        ],
      },
      { tagName: 'button', classes: ['theme-switcher'] },
    ],
  };

  const headerConfig = {
    tagName: 'header',
    classes: ['header'],
    children: [
      loadGameContainerConfig,
      modeContainerConfig,
      settingsContainerConfig,
    ],
  };

  const header = createElementWithConfig(headerConfig);
  return header;
};

export default generateSettings;
