function sayHi() {
  console.log('Hi');
  console.log(this);
}
// should give also a global window
sayHi();

// create new empty object
let check = new sayHi();
console.log(check);

let yoGreetz = {};
yoGreetz.sayHi = function () {
  console.log('Hi');
  console.log(this);
}
yoGreetz.sayHi();

