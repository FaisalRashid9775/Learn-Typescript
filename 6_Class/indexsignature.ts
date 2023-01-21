class Human3 {
    [x:string] : boolean | ((x: string)=>boolean)  // [x:string] is index signature you cant use number for key and string for value
    check (x:string){
        return this[x] as boolean
    }
}
