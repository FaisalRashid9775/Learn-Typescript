"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = Math.random() > 0.5 ? {
    Name: 'Faisal',
    age: 34,
    Muslim: true
} : {
    Name: 'Alisa',
    age: 27,
    Muslim: false,
    location: 'XYZ'
};
if (person.Muslim === true) {
    console.log(person.Name);
}
else {
    console.log(person.Name);
}
