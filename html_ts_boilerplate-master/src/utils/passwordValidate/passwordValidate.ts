export const passwordValidate = (password: string) => {
  const specialCharAndNumberRegx = /(?=.*[!@#$%^&*])(?=.*[0-9])(?=.[a-zA-Z])/;
  const invalidSpecialCharacter = /[()_+{}[\]:;<>,.?~\\-]/;
  // eslint-disable-next-line no-control-regex
  const nonEnglishCharRegx = /[^\x00-\x7F]/;

  if (specialCharAndNumberRegx.test(password) !== true) {
    return false;
  }

  if (invalidSpecialCharacter.test(password) === true) {
    return false;
  }

  if (nonEnglishCharRegx.test(password) === true) {
    return false;
  }

  if (password.includes(' ')) {
    return false;
  }

  if (password.length < 8) {
    return false;
  }

  return true;
};
