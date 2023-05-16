const getResultList = () => {
  const gameId = +localStorage.getItem('gameId');

  const resultsList = [];
  for (let i = 0; i < 10; i += 1) {
    const item = localStorage.getItem(gameId - i);
    resultsList.push(item);
  }
  /* localStorage.clear() */
  return resultsList;
};

const closePopup = (event) => {
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
  overlay.addEventListener('click', closePopup);
};

const generateModal = () => {
  generateOverlay();
  const overlay = document.querySelector('.overlay');
  const title = document.createElement('h2');
  title.classList.add('modal-title');
  title.textContent = 'Latest Results';
  overlay.append(title);

  const resultsList = getResultList();
  const list = document.createElement('ul');
  list.classList.add('modal');

  const modalBtn = document.createElement('button');
  modalBtn.classList.add('btn-modal');
  modalBtn.textContent = '✖';
  list.append(modalBtn);

  resultsList.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.append(li);
  });

  overlay.append(list);
};

export { generateModal, closePopup };
