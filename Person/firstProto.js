const Person = require('./initPerson');

Person.prototype.methodFirstProto = function() {
  console.log('methodFirstProto: ', this.name ,this.age);
};

// module.exports = Person;