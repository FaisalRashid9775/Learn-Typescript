// class Car {
//     color='Silver'
//     power(state  : boolean) {
//         if (state===true){
//             console.log('Engine is started')
//         }
//         else {
//             console.log('Engine is start')
//         }        
//     }
// }

// let myCar=new Car()
// console.log(myCar.color)

// myCar.power(true)




// class Car {
//     constructor(color : string, location : string ,vechicleNumber :string){
//         this.color=color
//         this.location=location
//         this.vechicleNumber=vechicleNumber
//     }

//     color : string
//     location : string
//     owner! : string // Optional property if you do not want to give it value
//     readonly vechicleNumber : string           // Can not be change its value in future

//     power(state  : boolean) {
//         if (state===true){
//             console.log('Engine is started')
//         }
//         else {
//             console.log('Engine is start')
//         }        
//     }
// }

// let myCar=new Car('Black','Islamabad', '1F2A')
// console.log(myCar.color,myCar.location,myCar.owner)


// myCar.power(true)

// let newCar : Car = {
//     color:'Black',
//     location : 'California',
//     owner : 'me',
//     vechicleNumber : '1F3D',
//     power(){}
// }

// console.log(newCar)




class Car {
    constructor(color : string, location : string ,vechicleNumber :string){
        this.color=color
        this.location=location
        this.vechicleNumber=vechicleNumber
    }

    color : string
    location : string
    owner! : string // Optional property if you do not want to give it value
    readonly vechicleNumber : string           // Can not be change its value in future

    power(state  : boolean) {
        if (state===true){
            console.log('Engine is started')
        }
        else {
            console.log('Engine is start')
        }        
    }
}

class Ferari extends Car {
    constructor(color : string, location : string ,vechicleNumber :string, autoPilot : boolean){
        super(color, location,vechicleNumber)
        this.autoPilot=autoPilot
    }
    autoPilot : boolean
    installment=10000
    power(state : boolean){
        if(state===true){
            console.log('Ferrari Engine start')
        }
        else {
            console.log('Ferrari Engine stop')
        }
    }            //
}
let ferrariCar= new Ferari('Black','Karachi','1f2d',true)
console.log(ferrariCar)
ferrariCar.power(false)