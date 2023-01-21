"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// gives error due to extra property in person
// let person : Human ={
//     Height: 6,
//     weight : 76,
//     location :'asia'
// }
let superPerson = {
    Height: 7,
    weight: 67,
    location: 'Asia',
    color: 'Dark'
};
let Person01 = superPerson;
// does not show error for exciting objects. 
