function hello (name :string ){
    return name
}

console.log(hello('alexznder'))

//Explicit
function HI(name2 : string) : string   {
    // if (name2 ==='Ali'){
    //     return 7
    // } does not return because of return type is string
    return name2
}

console.log(HI('Ali'))