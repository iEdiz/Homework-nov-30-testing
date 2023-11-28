import { nameValidate } from './nameValidate';

describe('nameValidate', () => {
  it('should validate 1 char letter', () => {
    const result = nameValidate('a');

    expect(result).toEqual(false);
  });

  it('should validate 10 char letter', () => {
    const result = nameValidate('dsewetrfre');

    expect(result).toEqual(true);
  });

  it('should validate a number in a string', () => {
    const result = nameValidate('dse231sd');

    expect(result).toEqual(false);
  });

  it('should validate a special character in a string', () => {
    const result = nameValidate('jdjeir@fdsf*');

    expect(result).toEqual(false);
  });

  it('should validate a number AND a special character in a string', () => {
    const result = nameValidate('hjdhasdlk@122D@332');

    expect(result).toEqual(false);
  });

  it('should validate spaces', () => {
    const result = nameValidate('djsdj jsadj');

    expect(result).toEqual(false);
  });

  it('should validate an empty string', () => {
    const result = nameValidate('');

    expect(result).toEqual(false);
  });

  it('should validate uppercase and lowercase letters', () => {
    const result = nameValidate('dsdfsaijnUHIRUHDSAdsad');

    expect(result).toEqual(true);
  });
});
