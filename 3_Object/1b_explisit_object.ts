type faisalInfo= {
    name : {firstname : string, lastName : string},
    age : number,
    isTeaching : boolean,
    dob : Date,
    certificate : string[]
}

let faisal : faisalInfo
faisal={
    name : {firstname : 'Faisal', lastName :'Rashid'},
    age : 28,
    isTeaching : true,
    dob : new Date(),
    certificate : ['AWS','Rust','Docker']
}
console.log(faisal.certificate)

export {}

