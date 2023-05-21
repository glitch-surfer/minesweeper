const closeModal = (event) => {
  if (!event.target.closest('.modal')) {
    document.querySelector('.overlay').remove();
    document.body.style.overflow = '';
  } else if (event.target.closest('.btn-modal')) {
    document.querySelector('.overlay').remove();
    document.body.style.overflow = '';
  }
};

const generateOverlay = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.append(overlay);
  document.body.style.overflow = 'hidden';
  overlay.addEventListener('click', closeModal);
};

export default generateOverlay;
