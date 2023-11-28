export const emailValidate = (email: string) => {
  const specialCharacterRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (specialCharacterRegex.test(email) !== true) {
    return false;
  }

  return true;
};
