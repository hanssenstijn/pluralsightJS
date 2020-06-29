'use strict';
(function () {


  function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  Person.prototype.age = 29;

  console.log(Person.prototype);

  let jim = new Person('Jim', 'Cooper');
  let sofia = new Person('Sofia', 'Cooper');
  sofia.__proto__.age = 19

  console.log(jim.__proto__);
  console.log(sofia.__proto__);
  console.log(Person.prototype === jim.__proto__);

})();