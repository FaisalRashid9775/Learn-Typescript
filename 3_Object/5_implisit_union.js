"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPakistan = Math.random() > 0.5 ?
    {
        name: 'Ali',
        location: 'Pakistan',
        isMuslim: true
    } : {
    name: 'Alexzander',
    location: 'USA',
    isNotMuslim: true
};
console.log(isPakistan.isMuslim);
console.log(isPakistan.isNotMuslim);
//Half of the time Answer will be undefine which maube effect your answer. 
