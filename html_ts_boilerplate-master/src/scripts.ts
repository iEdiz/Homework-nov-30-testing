import $ from 'jquery';
import { nameValidate } from './utils/sum/nameValidate/nameValidate';
import { emailValidate } from './utils/emailValidate/emailValidate';
import { passwordValidate } from './utils/passwordValidate/passwordValidate';
import { toastifyFunction } from './utils/toastify/toastify';

$('.js-wrapper').html(`
    <form action="" class="wrapper__form js-form">
        <label for="name">
            <h1 class="wrapper__label-heading">Your name:</h1>
            <input type="text" name="name" id="name" class="wrapper__input js-name" placeholder="Username">
        </label>
        <label for="password">
            <h1 class="wrapper__label-heading">Your password:</h1>
            <input type="password" name="password" id="password" class="wrapper__input js-password" placeholder="Password">
        </label>
        <label for="email">
            <h1 class="wrapper__label-heading">Your email:</h1>
            <input type="email" name="email" id="email" class="wrapper__input js-email" placeholder="Email">
        </label>
        <div class="button-wrapper">
        <button type="submit" class="wrapper__button">Submit</button>
        </div>
    </form>
`);

$('.js-form').on('submit', (e) => {
  e.preventDefault();

  const name = $('.js-name').val();
  const email = $('.js-email').val();
  const password = $('.js-password').val();

  const isNameValid = nameValidate(name.toString());
  const isEmailValid = emailValidate(email.toString());
  const isPasswordValid = passwordValidate(password.toString());

  if (isNameValid === true && isEmailValid === true && isPasswordValid === true) {
    toastifyFunction('Form is accepted! 🎉');
  } else if (isNameValid !== true) {
    toastifyFunction('Invalid username! 😤');
  } else if (isPasswordValid !== true) {
    toastifyFunction('Invalid password! 🔑');
  } else if (isEmailValid !== true) {
    toastifyFunction('Invalid email! 📧');
  }
});
