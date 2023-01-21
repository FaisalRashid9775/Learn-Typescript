// classses 


// class Car {
//     color ='silver'
// }

// let mycar= new Car()
// console.log(mycar.color)


//  Method in class 
// class Car2{
//     color = 'Silver'
//     power(state: boolean){
//         if (state===true){
//             console.log(`Engine in start`)
//         }
//         else {
//             console.log(`Engine is stop`)
//         }
//     }
// }
// let mycar2=new Car2()
// mycar2.power(false)


// Construtor in Classes

// class Car3{
//     constructor(color: string, location : string){
//         this.color=color;
//         this.location=location;
//     }
//     color : string;
//     location : string;
//     power(state : boolean){
//         if (state===true){
//             console.log('engine start')
//         }
//         else{
//             console.log('Engine end')
//         }
//     }
// }

// let tsCar=new Car3('Black','Jordan')
// console.log(`My car is ${tsCar.color} and location is ${tsCar.location}`)
// tsCar.power(true)

// non exicting property
// class Car4{
//     constructor(color: string, location : string){
//         this.color=color;
//         this.location=location;
//     }
//     color : string;
//     location : string;
//     owner ?:string
//     power(state : boolean){
//         if (state===true){
//             console.log('engine start')
//         }
//         else{
//             console.log('Engine end')
//         }
//     }
// }

// let tsCar=new Car4('Black','Jordan')
// console.log(`My car is ${tsCar.color} and location is ${tsCar.location}`)
// tsCar.power(true)
// tsCar.owner


// type enforcement
// class Car5{
//     constructor(color: string, location : string){
//         this.color=color;
//         this.location=location;
//     }
//     color : string;
//     location : string;
//     owner ?:string
//     power(state : boolean){
//         if (state===true){
//             console.log('engine start')
//         }
//         else{
//             console.log('Engine end')
//         }
//     }
// }

// let myCar : Car5 
// myCar={
//     color :'Black',
//     location : 'Islamabad',
//     owner : 'John',
//     power(){}
// }
// console.log(myCar)



