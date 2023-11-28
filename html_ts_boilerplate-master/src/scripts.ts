import $ from 'jquery';
import { nameValidate } from './utils/sum/nameValidate/nameValidate';
import { emailValidate } from './utils/emailValidate/emailValidate';
import { passwordValidate } from './utils/passwordValidate/passwordValidate';

$('.js-wrapper').html(`
    <form action="" class="wrapper__form js-form">
        <label for="name">
            <h1>Your name</h1>
            <input type="text" name="name" id="name" class="wrapper__input js-name" placeholder="Name">
        </label>
        <label for="password">
            <h1>Your password</h1>
            <input type="password" name="password" id="password" class="wrapper__input js-password" placeholder="Password">
        </label>
        <label for="email">
            <h1>Your email</h1>
            <input type="email" name="email" id="email" class="wrapper__input js-email" placeholder="Email">
        </label>
        <button type="submit">Button</button>
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
    alert('success!');
  } else if (isNameValid !== true) {
    alert('Name is invalid!');
  } else if (isPasswordValid !== true) {
    alert('Password is invalid!');
  } else if (isEmailValid !== true) {
    alert('Email is invalid!');
  }
});
