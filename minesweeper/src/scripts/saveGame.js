const saveGame = () => {
  const main = document.querySelector('.main');
  const html = main.outerHTML;
  const savedData = { html };
  const jsonData = JSON.stringify(savedData);

  
  /* localStorage.clear(); */
  /* const savedGame = localStorage.getItem('savedGame') || null; */
  localStorage.setItem('savedGame', jsonData);
  /* console.log(localStorage.getItem('savedGame')); */
};

export default saveGame;
