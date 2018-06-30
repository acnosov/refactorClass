const Person = require('./initPerson');

Person.prototype.methodSecondProto = function() {
  console.log('methodSecondProto: ', this.name ,this.age);
};

// module.exports = Person;