interface Human2 {
    name : string
    age : number
    getAge(age:number):number

}


class Student implements Human2 {
    name: string
    age: number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    getAge(age: number): number {
            return this.age
        
    }
}

class Teacher implements Human2 {
    name='Zia'
    age = 60
    getAge(age:number){
        return this.age
    }
}

let student1= new Student('Ali',20)

console.log(student1)
console.log(Teacher)