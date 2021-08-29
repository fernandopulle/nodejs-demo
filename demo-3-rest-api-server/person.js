class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        return `Hello World. Im  ${this.name} and im ${this.age} years old.`;
    }
}

module.exports = Person;