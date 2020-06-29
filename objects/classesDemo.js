'use strict';
(function () {

  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = 0;
    }
  }

  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      console.log(this.firstName);
    }
  }

  let jim = new Person('Jim', 'Cooper', 29);

  jim.age = 29;

})();