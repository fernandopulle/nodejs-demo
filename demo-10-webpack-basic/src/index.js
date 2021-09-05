const Person = require("./models/person")
const NAME = require("./models/name")

const person = new Person(NAME, 20);

console.log(person.greetings());