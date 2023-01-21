type subject={ 
    science_Sub : string[],
    arts_Sub : string[]
}

const person1 : subject ={
    science_Sub : ['Math', 'Physics','Bio'],
    arts_Sub : ['English','Urdu','Pak-stud']
}
//show eeror because second property not given value
// const person2 : subject={
//     science_Sub : ['Math','Physics']
// }
//show error a property not given value
// const person3 : subject ={
//     arts_Sub : ['English','Urdu']
// }