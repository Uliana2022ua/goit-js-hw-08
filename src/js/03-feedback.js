import throttle from 'lodash.throttle';

const  form  =  document. querySelector('.feedback-form');
const  message  =  document. querySelector('.feedback-form textarea');
const  email  =  document. querySelector('.feedback-form input');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

console. log(email);
console. log(message);
console. log(form);

getTempData();

form. addEventListener('input',  throttle(onFormInput,  500));
form. addEventListener('submit',  onFormSubmit);

function getTempData() {
  const tempData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  

  if (tempData) {
    email. value  =  tempData. email;
    message.value = tempData.message;
    formData.email = tempData.email;
    formData.message = tempData.message;
  }
}

function onFormInput(event) {
  formData. email  =  email. value;
  formData. message  =  message. value;

  localStorage. setItem(STORAGE_KEY,  JSON. stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
   const {
    elements: { email, message },
  } = event.target;
  if (email.value === "" || message.value === "") {
    alert("Заповніть всі поля");
    return;
  }
  event. currentTarget. reset();
  localStorage. removeItem(STORAGE_KEY);
  console. log(formData);
}
