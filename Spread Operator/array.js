/*when we create an array, it will be created in heap but its address will be 
  stored in stack. So when we make arr2=arr the arr2 will also store adress of same 
  array, So now when we push an element in arr2,  then it will also cause change
  in arr  
*/

/**
 * so to solve this problem we start using 'Spread Operator'
 * by the help of spread operator, we can copy the content of 'arr' 
 * array but the new array 'arr2' will be created at new address
 * so it will not cause any change in 'arr' array 
 * Spread Operator can be used syntax [...arr] 
 */

let arr=[1,2,3];

let arr2=arr;
let arr3=[...arr]  //arr3 created using spread operator 
arr3.push(5);  //so when we push 5 in arr3, it will not chnage in 'arr'
//but it will be created in new address

arr2.push(4)

console.log('arr :',arr);
console.log('arr2 :',arr2);
console.log('arr3 :',arr3);