import { passwordValidate } from './passwordValidate';

describe('passwordValidate', () => {
  it('should validate at least 1 special character and 1 number', () => {
    const result = passwordValidate('dkskd12dkds@d');

    expect(result).toEqual(true);
  });

  it('should validate at least 1 special character and 1 number', () => {
    const result = passwordValidate('dks@kd#dkd1sd');

    expect(result).toEqual(true);
  });

  it('should validate email with less than 8 chars', () => {
    const result = passwordValidate('dse@1');

    expect(result).toEqual(false);
  });

  it('should validate email with only special char and no numbers', () => {
    const result = passwordValidate('dsdsd&dsdd');

    expect(result).toEqual(false);
  });

  it('should validate email with only number and no special char', () => {
    const result = passwordValidate('dsdsd2dsdd');

    expect(result).toEqual(false);
  });

  it('should validate email with no strings and only special char or numbers', () => {
    const result = passwordValidate('@#$@3231@');

    expect(result).toEqual(false);
  });

  it('should validate email with diffferent special char', () => {
    const result = passwordValidate('dsd.23@dawe');

    expect(result).toEqual(false);
  });

  it('should validate spaces in email', () => {
    const result = passwordValidate('saads as@32ds');

    expect(result).toEqual(false);
  });

  it('should validate spaces in email', () => {
    const result = passwordValidate('āādsd@321čds');

    expect(result).toEqual(false);
  });
});
