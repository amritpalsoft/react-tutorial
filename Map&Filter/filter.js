let array=['orange','mango','banana','watermelon','apple']

let newArray=[]

//conventional for loop
//here we are filtering in array, elements whose size>=6 
//those elements will be stored in newArray

// for (let i = 0; i < array.length; i++) {
//     if (array[i].length>=6) {
//         newArray.push(array[i])
//     }
    
// }

// console.log(newArray);



//filter function
//same operation by filter function

newArray=array.filter((value)=>{
    return  (value.length>=6 && value.length<8)
        
})

console.log(newArray);
