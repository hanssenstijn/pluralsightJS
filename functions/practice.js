function greetings(name) {
  console.log("Hello " + name);
}

greetings('John')

function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(2, 3);
console.log(result);

function printAll() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

printAll(1, 2);

function greet() {
  return 'Hello my Friend!';
}
// have to asign to variable else lose return output
let message = greet();
console.log(message);

// scope example
let message2;

function greeting() {
  let message2 = "Yo";
  return message2
}
x = greeting()
console.log(x)

function test() {
  let testing = "working?"
}
test();
// out of scope
// console.log(testing);

//change to var of usage out of scope
let mes = 'hello';
if (mes === 'hello') {
  var count = 100;
}
console.log(count);

// IIFE immediately Invoked Function Expression
// (function () {
//   statements
// })();

