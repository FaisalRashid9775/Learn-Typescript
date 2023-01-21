// last parameter can be optional but not first 
// if parameter is optional is does need to be place while calling
// function have parameter like age : number | undefine it must be use while calling although it is undefine.
function info(name : string , age? : number){
    console.log(name,age)

}

info('Ali')
info('Ali',27)