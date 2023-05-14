const setTimer = () => {
  let seconds = 0;

  document.timer = setInterval(() => {
    document.querySelector('.timer').innerHTML = `Timer: ${seconds += 1} sec`;
  }, 1000);
};

export default setTimer;
