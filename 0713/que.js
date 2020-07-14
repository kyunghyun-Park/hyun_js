var num = Number(prompt("숫자 입력", ''));
var num2 = prompt("하나 더 입력", '');

console.log(num * (num2.charAt(2) - '0'));
console.log(num * (num2.charAt(1) - '0'));
console.log(num * (num2.charAt(0) - '0'));
console.log(num * Number(num2));