import generateOverlay from './generateResultModal';

const generateAboutModal = () => {
  generateOverlay();
  const overlay = document.querySelector('.overlay');

  const title = document.createElement('h2');
  title.classList.add('modal-title');
  title.textContent = 'About Game';
  overlay.append(title);

  const wraper = document.createElement('div');
  wraper.classList.add('modal');
  wraper.classList.add('about');

  const modalBtn = document.createElement('button');
  modalBtn.classList.add('btn-modal');
  modalBtn.textContent = '✖';
  wraper.append(modalBtn);

  const img = document.createElement('img');
  img.classList.add('about__img');
  img.setAttribute('src', '../src/assets/img/about.png');
  wraper.append(img);

  const text = document.createElement('a');
  text.setAttribute('href', 'https://github.com/glitch-surfer');
  text.classList.add('about__text');
  text.textContent = 'Made by Glitch_surfer';
  wraper.append(text);

  overlay.append(wraper);
};

export default generateAboutModal;
