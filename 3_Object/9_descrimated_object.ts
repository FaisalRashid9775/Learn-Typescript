type national = {
    Name : string,
    age : number, 
    Muslim : boolean
};
type foreign={
    Name :string,
    age: number, 
    Muslim : boolean,
    location : string
};

type Person = national | foreign
const person : Person= Math.random()>0.5 ? {
    Name :'Faisal',
    age :34,
    Muslim :true
} : {
    Name : 'Alisa',
    age :27,
    Muslim : false,
    location : 'XYZ'
}

if (person.Muslim===true){
    console.log(person.Name)
}
else {
    console.log(person.Name)
}

export {}