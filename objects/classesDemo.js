'use strict';
(function () {
  // consturctor for property values
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = 0;
    }
  }

  // extend the instance
  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      console.log(this.firstName);
    }
  }

  // create new instance
  let jim = new Person('Jim', 'Cooper', 29);

  jim.age = 29;

})();