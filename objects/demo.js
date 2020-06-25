'use strict';
(function () {

  let person = {
    firstName: 'Jam',
    lastName: 'Cooper'
  }

  person.age = 29;
  person.isAdult = function () {
    return this.age >= 18;
  }




})();