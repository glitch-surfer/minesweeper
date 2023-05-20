import generateOverlay from './generateOverlay';
import playClickSound from './playClickSound';
import createElementWithConfig from './createElementWithConfig';

const generateAboutModal = () => {
  playClickSound();

  generateOverlay();
  const overlay = document.querySelector('.overlay');

  const titleConfig = {
    tagName: 'h2',
    classes: ['modal-title'],
    textContent: 'About Game',
  };
  const title = createElementWithConfig(titleConfig);
  overlay.append(title);

  const wraperConfig = {
    tagName: 'div',
    classes: ['modal', 'about'],
  };
  const wraper = createElementWithConfig(wraperConfig);

  const modalBtnConfig = {
    tagName: 'button',
    classes: ['btn-modal'],
    textContent: '✖',
  };
  const modalBtn = createElementWithConfig(modalBtnConfig);
  wraper.append(modalBtn);

  const imgConfig = {
    tagName: 'img',
    classes: ['about__img'],
    attributes: {
      src: '../src/assets/img/about.png',
    },
  };
  const img = createElementWithConfig(imgConfig);
  wraper.append(img);

  const textConfig = {
    tagName: 'a',
    classes: ['about__text'],
    attributes: {
      href: 'https://github.com/glitch-surfer',
    },
    textContent: 'Made by Glitch_surfer',
  };
  const text = createElementWithConfig(textConfig);
  wraper.append(text);

  overlay.append(wraper);
};

export default generateAboutModal;
