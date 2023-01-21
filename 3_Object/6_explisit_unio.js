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
// person.Muslim not accessable
// person.nonMuslim not accessable because there are may not be exits
