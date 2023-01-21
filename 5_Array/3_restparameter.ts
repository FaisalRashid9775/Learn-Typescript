function greet(greeting : string, ...personName : string[]){
    for (let name of  personName){
        console.log(`${greeting}  ${name}`)
    }
}
let personName : string[] = ['John','Mickle','Linken']

greet('Welcome', ...personName)