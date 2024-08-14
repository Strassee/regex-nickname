// TODO: write your code here
import Validator from './validator';

const validator = new Validator();

console.log(validator.validateUsername('ni50ck500name'));
console.log(validator.validateUsername('ni50ck@500name'));
console.log(validator.validateUsername('ni50ck5000name'));
console.log(validator.validateUsername('_ni50ck5000name'));
console.log(validator.validateUsername('ni50ck5000name_'));
console.log(validator.validateUsername('-ni50ck5000name'));
console.log(validator.validateUsername('ni50ck5000name-'));
console.log(validator.validateUsername('0ni50ck5000name'));
console.log(validator.validateUsername('ni50ck5000name0'));
console.log(validator.validateUsername('ni50ck-_name'));
