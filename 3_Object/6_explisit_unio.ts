type Pakistani ={Name : string, age :number, Muslim : boolean}
type foreign={Name :string, age: number, nonMuslim : boolean}

type Person = Pakistani | foreign
const person : Person= Math.random()>0.5 ? {
    Name :'Faisal',
    age :34,
    Muslim :true
} : {
    Name : 'Alexzander',
    age :27,
    nonMuslim : true
}

// person.Muslim not accessable
// person.nonMuslim not accessable because there are may not be exits