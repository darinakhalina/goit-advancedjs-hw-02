import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

elements.form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const delay = Number(formData.get('delay'));
  const step = Number(formData.get('step'));
  const amount = Number(formData.get('amount'));

  for (let i = 0; i < amount; i++) {
    const currentDelay = delay + i * step;
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'Success',
          message: `Fulfilled promise ${position} in ${delay}ms`,
          closeOnEscape: true,
          position: 'topRight',
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: 'Error',
          message: `Rejected promise ${position} in ${delay}ms`,
          closeOnEscape: true,
          position: 'topRight',
        });
      });
  }
  elements.delayInput.value = '';
  elements.stepInput.value = '';
  elements.amountInput.value = '';
});
