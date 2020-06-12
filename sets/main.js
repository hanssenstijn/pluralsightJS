var element = document.getElementById("test");
var elementos = document.getElementById("testtest");
const mySet = new Set();

// add values
mySet.add(60);
mySet.add({
  name: 'Dom',
  age: 24
});
mySet.add('dcd');

element.innerHTML = mySet.size;
elementos.innerHTML = mySet;

for (let item of mySet) {
  console.log(item);
}