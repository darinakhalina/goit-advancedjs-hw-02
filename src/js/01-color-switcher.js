const elements = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

const INTERVAL_DURATION = 1000;

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

elements.stopBtn.disabled = true;

elements.startBtn.addEventListener('click', () => {
  elements.startBtn.disabled = true;
  elements.stopBtn.disabled = false;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DURATION);
});

elements.stopBtn.addEventListener('click', () => {
  elements.startBtn.disabled = false;
  elements.stopBtn.disabled = true;

  clearInterval(intervalId);
});
