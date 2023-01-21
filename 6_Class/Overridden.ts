//overridden constructor
// class Car6{
//     constructor(color : string, location : string){
//         this.color=color
//         this.location=location
//     }
//     color : string
//     location : string
// }

// class BMW extends Car6 {
//     constructor(engine:number,color:string,location:string){
//         super(color,location)
//         this.engine=engine
//     }
//     engine!:number
//     price ='90M'
//     security = true
// }

// let myNewCar= new BMW(123,'Black','Islamabad')

// console.log(myNewCar)


// Overridden method
// class Car6{
//     constructor(color : string, location : string){
//         this.color=color
//         this.location=location
//     }
//     color : string
//     location : string
//     power(state:boolean) : string{
//         if(state===true){
//             return 'Engine is start'
//      }
//         else {
//             return 'Engine is stop'
//     }
//     }
// }

// class BMW extends Car6 {
//     constructor(engine:number,color:string,location:string){
//         super(color,location)
//         this.engine=engine
//     }
//     engine!:number
//     price ='90M'
//     security = true;
//     power(state:boolean): string{
//         if(state===true){
//             return 'BMW Engine is start'
//         }
//         else {
//             return 'BMW Engine is stop'        }
//     }
// }

// let myNewCar= new BMW(123,'Black','Islamabad')
// myNewCar.power(true)


