import $ from 'jquery';
import { nameValidate } from './utils/sum/nameValidate/nameValidate';
import { emailValidate } from './utils/emailValidate/emailValidate';
import { passwordValidate } from './utils/passwordValidate/passwordValidate';
import { toastifyFunction } from './utils/toastify/toastify';

$('.js-wrapper').html(`
    <h1 class="main-header">Registration form</h1>
    <form action="" class="wrapper__form js-form">
    
        <label for="name">
            <h1 class="wrapper__label-heading">Your username:</h1>
            <input type="text" name="name" id="name" class="wrapper__input js-name" placeholder="Username" autocomplete="off">
        </label>
        <label for="password">
            <h1 class="wrapper__label-heading">Your password:</h1>
            <input type="password" name="password" id="password" class="wrapper__input js-password" placeholder="Password">
        </label>
        <label for="email">
            <h1 class="wrapper__label-heading">Your email:</h1>
            <input type="email" name="email" id="email" class="wrapper__input js-email" placeholder="Email" autocomplete="off">
        </label>
        <div class="button-wrapper">
        <button type="submit" class="wrapper__button">Submit</button>
        </div>
    </form>
`);

$('.js-form').on('submit', (e) => {
  e.preventDefault();

  const passwordRegex = /(?=.*[!@#$%^&*])(?=.*[0-9])(?=.[a-zA-Z])/;

  const name = $<HTMLInputElement>('.js-name').val();
  const email = $<HTMLInputElement>('.js-email').val();
  const password = $<HTMLInputElement>('.js-password').val();

  const isNameValid = nameValidate(name.toString());
  const isEmailValid = emailValidate(email.toString());
  const isPasswordValid = passwordValidate(password.toString());

  if (isNameValid === true && isEmailValid === true && isPasswordValid === true) {
    toastifyFunction('Form is accepted! 🎉');
  } else if (name.toString().length < 2) {
    toastifyFunction('Name is too short! 🩳');
  } else if (name.toString().length > 50) {
    toastifyFunction('Name is too long! 💻');
  } else if (name.toString().includes(' ')) {
    toastifyFunction('Name must not include spaces! 🌌');
  } else if (isNameValid !== true) {
    toastifyFunction('Invalid name! 😤');
  } else if (password.toString().length < 8) {
    toastifyFunction('Password is too short! 🔑');
  } else if (password.toString().includes(' ')) {
    toastifyFunction('Password must not include spaces! 🌌');
  } else if (!passwordRegex.test(password.toString())) {
    toastifyFunction('Must include at least 1 number and 1 special character 🤠');
  } else if (isPasswordValid !== true) {
    toastifyFunction('Invalid password! ❌');
  } else if (isEmailValid !== true) {
    toastifyFunction('Please enter a valid email! 📧');
  }
});
