function sayHiYo(message, name = 'World') {
  console.log(message + name);
}
sayHiYo('Hello');
sayHiYo('Hi', 'John');

// rest parameters
let saySay = function yoYo(...names) {
  names.forEach(name => console.log('Hi ' + name))
}

saySay('St', 'IJ', 'N');

function groet(person1, person2) {
  console.log('Hi ' + person1 + '& ' + person2);
}
let naampjes = ['Stijn', 'Hans']
groet(...naampjes);