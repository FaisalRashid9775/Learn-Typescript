class Mobile{
    static screen =true
    static lock(screenLock : boolean){
        console.log('Your mobile screen is lock')
    }
}
console.log(Mobile.screen)      // No need to create instance if you are making static variables
Mobile.lock(true)
