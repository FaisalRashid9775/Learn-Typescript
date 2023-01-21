type firstName = {firstName : string}
type lastName = { lastName : string}
const fullName ={
    firstName : 'Faisal',
    lastName : 'Rashid',
    age : 27
}

let firstName1 : firstName =fullName;  // Does not give error on already made object 2. firstname got value
console.log(firstName1)

let lastName1 : lastName =fullName   //  Does not give error on already made object 2. lastname got value
console.log(lastName1)