export const nameValidate = (name: string) => {
  const specialCharsAndNumbers = /^(?=.*[0-9!@#$%^&*()_+{}[\]:;<>,.?~\\-])[\w!@#$%^&*()_+{}[\]:;<>,.?~-]+$/;

  if (name.length < 2 || name.length >= 50) {
    return false;
  }

  if (specialCharsAndNumbers.test(name) === true) {
    return false;
  }

  if (name.includes(' ')) {
    return false;
  }
  return true;
};
