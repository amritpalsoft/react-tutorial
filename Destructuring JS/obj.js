let newObj={
    today:{
        low:25,
        high:30
    },
    yesterday:{
        low:23,
        high:31
    },
    tommorow:{
        low:20,
        high:28
    }
}


//here we are extracting properties from object without using '.' operator  
// console.log(newObj.today.low);

let {tommorow:{low}}=newObj
let {today:{high}}=newObj
let {yesterday:{low:yesterdayLow}}=newObj

//as low is already used, so we created new variable name for low 'yesterdayLow'

console.log(low);
console.log(high);
console.log(yesterdayLow);