function createDate(timestamp : number) : Date ;
function createDate(Day : number, date : number, year : number ) : Date;

function createDate(timestampOrDay : number, date ? : number, year ? : number) : Date {
    return date===undefined || year===undefined ? 
    new Date (timestampOrDay) : new Date(timestampOrDay,date,year)
    console.log('ok')
}

createDate(1243344)
createDate(12,10,1994)