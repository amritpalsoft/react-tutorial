let arr=['hi','i','am','amrit'];

// let a=arr[0]
// let b=arr[1]

// console.log(a,b);


//destructuring is a way of extracting properties from an array or object
//here we extracted properties from arr, and stored in variable a,b,c,d

// let [a,b,c,d]=arr;
// console.log(a,b,c,d);

//here we skipped c so we use one extra comma
let[a,b,,d]=arr;
console.log(a,b,d);

