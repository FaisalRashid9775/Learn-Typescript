type national = {
    Name : string,
    age : number, 
    Muslim : boolean};
type foreign={
    Name :string,
    age: number, 
    nonMuslim : boolean};

type Person = national | foreign
const person : Person= Math.random()>0.5 ? {
    Name :'Faisal',
    age :34,
    Muslim :true
} : {
    Name : 'Alexzander',
    age :27,
    nonMuslim : true
}

if ('Muslim' in person){
    console.log(person.Muslim)
}
else {
    console.log(person.nonMuslim)
}

export{}