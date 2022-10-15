let counterValue = 0;
const decrement = document.querySelector('button[data-action=decrement]');
const increment = document.querySelector('button[data-action=increment]');
const value = document.querySelector('#value');

const decrCounter = function () {
    counterValue -= 1;
    value.textContent = counterValue;
  };
  
  const incrCounter = function () {
    counterValue += 1;
    value.textContent = counterValue;
  };
  
  decrement.addEventListener('click', decrCounter);
  increment.addEventListener('click', incrCounter);