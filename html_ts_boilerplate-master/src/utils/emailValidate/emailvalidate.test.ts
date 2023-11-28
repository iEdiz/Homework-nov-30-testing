import { emailValidate } from './emailValidate';

describe('emailValidate', () => {
  it('should validate special characters that are not @ and .', () => {
    const result = emailValidate('323%dsd@in$ox.lv');

    expect(result).toEqual(false);
  });

  it('should validate @ as first char', () => {
    const result = emailValidate('@dsdsd.com');

    expect(result).toEqual(false);
  });

  it('should validate . as first char', () => {
    const result = emailValidate('.dsdsd.com');

    expect(result).toEqual(false);
  });

  it('should validate . as last character', () => {
    const result = emailValidate('dsaasd@dsd.');

    expect(result).toEqual(false);
  });

  it('should have @ present in email', () => {
    const result = emailValidate('dsaasd.com');

    expect(result).toEqual(false);
  });

  it('should have . present in email', () => {
    const result = emailValidate('dsaasd@com');

    expect(result).toEqual(false);
  });

  it('should have @ character before . character', () => {
    const result = emailValidate('dasdd.dsd@com');

    expect(result).toEqual(false);
  });

  it('should validate uppercase and lowercase letters in first part', () => {
    const result = emailValidate('HIJDdsdc@dsdas.com');

    expect(result).toEqual(true);
  });

  it('should validate an empty string', () => {
    const result = emailValidate('');

    expect(result).toEqual(false);
  });

  it('should validate spaces', () => {
    const result = emailValidate('dsa asd.com');

    expect(result).toEqual(false);
  });
});
