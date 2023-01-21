type fullname={
    firstName : string,
    lastName : string
}
type personInfo={
    fullName : fullname,
    age : number,
    location ? : string 
}

let firstPerson : personInfo ={
    fullName : {firstName : 'Faisal', lastName :'Rashid'}, 
    age : 34,
    location : 'Pakistan'
}

console.log(firstPerson)

// ? sign make property optional 
let secondPerson : personInfo={
    fullName :{firstName : 'Muzamil', lastName : 'Ali'},
    age : 23
}

console.log(secondPerson)