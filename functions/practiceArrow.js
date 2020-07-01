let hoiHoi = () => {
  return "hello world!";
}
let hoi = hoiHoi();
console.log(hoi);

let hoiTest = () => 'Hello Bro!';
let hoiyo = hoiTest();
console.log(hoiyo);

// old skool
let joeJoe = function greetz(name) {
  return 'Hello ' + name;
}
let joeBram = joeJoe('Bram');
console.log(joeBram);

// arrow new skool
let joeArrow = name => 'Hello new ' + name;
let joeMes = joeArrow('John');
console.log(joeMes);

let sumSum = (num1, num2) => num1 + num2;
let output = sumSum(3, 7)
console.log(output);

// this 
// refers to the owner of the function we are executing
// unlinke regular functions,
// arrow functions do not have their own this value
let bericht = {
  name: 'Stijn',
  regularFunction: function () {
    console.log(this);
    console.log('Hello ' + this.name);
  },
  arrowFunction: () => console.log('Hi ' + this.name)
}
bericht.regularFunction();
// does not include the this message
bericht.arrowFunction();