
let Height = Math.random()> 0.5? undefined : 'Inch'    // Types script infer that its type is union of undefine | string

// Explicit declaring type union
let Height2 : number | string   // Now its height is now union of undefine and string

Height2 = 49     // Narrowing

// Narrowing using if statement 

let age = Math.random()> 0.5 ? 30 : 'Thirty'
if (age==='Thirty'){
    age.toUpperCase()
}
else {
    //age.toUpperCase()     it show error because typescript automaticaly infer that its tye is number
}



///        Literal 
let lifespan: number | "ongoing" | "uncertain";     // only assign a number and these two string
lifespan = 89; //    Do not give error
lifespan = "ongoing"; // Do not give error
//lifespan = 'Not'      error 
//lifespan = true;      error because its type does not match with given types


// Type Aliases

let main1 : string | number | boolean | undefined | null
let main2 : string | number | boolean | undefined | null
let main3 : string | number | boolean | undefined | null
// do not need to  write it again and again. You can make it type

type mainType = string | number | boolean | undefined | null
let main4 : mainType