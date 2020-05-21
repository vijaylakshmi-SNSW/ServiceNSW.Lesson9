//import { fstat } from "fs";
const fs = require("fs");
const path = require("path");
//const util = require("util");
const FILE_PATH = path.join(__dirname, "People.json"); //import a file to use it in this code.

class Person {
    constructor(firstName, lastName, age, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Person(getRandomGivenName(), getRandomFamilyName(), getRandomNumber(42) + 18, uuid.v4());
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}
//peopleRaw = [];
let peopleRaw = JSON.parse(fs.readFileSync(FILE_PATH).toString());
let people = peopleRaw.map(person => new Person(person.firstName, person.lastName, person.age, person.id));
let info = people.map(person => person.getInfo());

console.log(people[0]);
for (let i = 0; i < info.length; i++) {
    const person = info[i];
    person.age++;
    
}
console.log(people[0]);

//fs.writeFileSync(FILE_PATH, JSON.stringify(people));