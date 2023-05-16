const switchTheme = (event) => {
  if (event.target.checked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
};

export default switchTheme;
