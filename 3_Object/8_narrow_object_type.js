"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = Math.random() > 0.5 ? {
    Name: 'Faisal',
    age: 34,
    Muslim: true
} : {
    Name: 'Alexzander',
    age: 27,
    nonMuslim: true
};
if ('Muslim' in person) {
    console.log(person.Muslim);
}
else {
    console.log(person.nonMuslim);
}
