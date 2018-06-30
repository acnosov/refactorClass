class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  methodInsideClass() {
    console.log('methodInsideClass: ', this.name ,this.age);
  }
}

Person.prototype.methodInsideFile = function() {
  console.log('methodInsideFile: ', this.name ,this.age);
};



module.exports = Person;