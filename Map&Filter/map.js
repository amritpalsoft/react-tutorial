let array=[1,2,3,4,5];

let newArray=[]

//conventional for loop

// for (let i = 0; i < array.length; i++) {
//      newArray[i] = array[i]*2;
    
// }

// console.log(newArray);

//Map Function

newArray=array.map((value)=>{
    return value*3
})

console.log(newArray);

