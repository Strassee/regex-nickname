import Validator from '../validator';

test('validateUsername true', () => {
  const validator = new Validator();
  const result = validator.validateUsername('ni50ck500name');
  expect(result).toBe(true);
});

test('validateUsername false', () => {
  const validator = new Validator();
  const result = validator.validateUsername('ni50ck@500name');
  expect(result).toBe(false);
});
