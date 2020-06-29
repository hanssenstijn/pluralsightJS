'use strict';
(function () {

  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = 0;
    }
  }

  let jim = new Person('Jim', 'Cooper', 29);

  jim.age = 29;

})();