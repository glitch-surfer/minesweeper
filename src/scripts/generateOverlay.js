import createElementWithConfig from './createElementWithConfig';

const closeModal = (event) => {
  const overlay = document.querySelector('.overlay');
  if (!event.target.closest('.modal')) {
    overlay.remove();
    document.body.style.overflow = '';
  } else if (event.target.closest('.btn-modal')) {
    overlay.remove();
    document.body.style.overflow = '';
  }
};

const generateOverlay = () => {
  const overlayConfig = {
    tagName: 'div',
    classes: ['overlay'],
  };
  const overlay = createElementWithConfig(overlayConfig);

  document.body.append(overlay);
  document.body.style.overflow = 'hidden';
  overlay.addEventListener('click', closeModal);
};

export default generateOverlay;
