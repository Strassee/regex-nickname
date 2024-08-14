export default class Validator {
  validateUsername(username) {
    const re = /^[^_\-\d]([a-zA-Z_\-0-9](?!\d{4}))+[^_\-\d]$/;
    return re.test(username);
  }
}
