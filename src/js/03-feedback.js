import throttle from 'lodash.throttle';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const formRef = document.querySelector('.feedback-form');
console.dir('formRef:', formRef);
const inputEmail = document.querySelector('input');
const message = document.querySelector('textarea');

formRef.addEventListener('input', throttle(onInputChange, 500));
formRef.addEventListener('submit', onFormSubmit);

let dataObj = {
  email: '',
  message: '',
};

getDataFromStorage();

function onInputChange(e) {
  // console.log(formRef[e.target.name].name);
  // console.log(formRef[e.target.name].value);
  if (
    formRef[e.target.name].name === 'email' ||
    formRef[e.target.name].name === 'message'
  ) {
    const inputEmailValue = inputEmail.value;
    const inputMessageValue = message.value;
    if (inputEmailValue && inputMessageValue) {
      dataObj = {
        email: inputEmailValue,
        message: inputMessageValue,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
    }
  }
}

function getDataFromStorage() {
  const getDataFromStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (getDataFromStorage === null) {
    return;
  } else {
    inputEmail.value = getDataFromStorage.email;
    message.value = getDataFromStorage.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  if (!inputEmail.value || !message.value) {
    Toastify({
      text: 'Всі поля форми мають бути заповненні',
      duration: 3000,
      className: 'warning ',
      position: 'center',
      close: true,
      style: {
        background: 'linear-gradient(to right, #ff5f6d, #ffc371)',
      },
    }).showToast();
    return;
  }
  dataObj = {
    email: inputEmail.value,
    message: message.value,
  };
  Toastify({
    text: 'Дякуємо за Ваш відгук',
    duration: 3000,
    className: 'success ',
    position: 'center',
    close: true,
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
  }).showToast();
  console.log(dataObj);
  localStorage.removeItem('feedback-form-state');
  setTimeout(() => {
    formRef.reset();
  }, 1000);
}
