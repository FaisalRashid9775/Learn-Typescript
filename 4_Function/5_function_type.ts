let nameArray=['Ali', 'Abdullah','Muzamil']

function printName(callback : (index : number)=> string){
    for(let i=0; i<nameArray.length; i++){
        console.log(callback(i))
    }
}
function print(index : number){
    return `${nameArray[index]}`
}
printName(print)