function Person() {}

// console.log(Person.prototype);
// console.log(Object.getOwnPropertyDescriptors(Person.prototype));

console.log(Person.prototype.__proto__); // [Object: null prototype] {} 就是object的prototype 所有的类继承自object
