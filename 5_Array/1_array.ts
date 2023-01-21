const array : string[] = ['JS','TS','React','Nodejs']

// function returing an array
let language : ()=> string[]
language = ()=> ['JS','Recat']


// array of function 
let array2 : (()=>string)[];
array2 =[()=>'JS', ()=>'React']

// Union-type array
let array3 : (string | number)[]=['JS','REACT',3, 4]


//evolviing 'any' array

let array4=[]
array4.push('React')
console.log(typeof array4)

array4.push(4)
console.log(typeof array4)
console.log(array4)


array4[0]=8
console.log(typeof array4)

console.log(array4)


// Multidimensional Array

let array5 : number[][]= [
    [1,3,5,7],
    [2,4,6,8],
    [3,5,7,9]
    
]
console.log(array5)