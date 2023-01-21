// All parameters given in function defination must be use while calling
// otherwise typescript give you an error.
function fullName(firstName : string, lastName : string){
    console.log(`${firstName} ${lastName}`)
}
// it gives error because 2 parameters are require but get 1.
//fullName('Muhammad')
fullName('Muhammad','Ali')

export{}