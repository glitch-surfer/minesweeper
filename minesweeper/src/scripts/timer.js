const setTimer = (start = 0) => {
  let seconds = start;

  document.timer = setInterval(() => {
    document.querySelector('.timer').innerHTML = `Timer: ${seconds += 1} sec`;
  }, 1000);
};

export default setTimer;
