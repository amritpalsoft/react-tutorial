/*
*in this obj, we are having object inside object
like 'adress' object inside 'obj', and 'state' object inside 'adress' object
 */

let obj={
    name:'amrit',
    branch:'mechanical',
    lastName:'singh',
    adress:{
        country:'India',
        state:{
            district:'Ayodhya',
            pin:224001
        }
    }
}
console.log(obj);

let obj3={...obj}
obj3.name='pal'
// obj3.adress.state.district='ghaziabad'
// console.log(obj3);
// console.log('hello');

//this is also example of Spread operator in Object
//this statement will copy all the details of obj object
//and all object inside obj
let obj2=JSON.parse(JSON.stringify(obj));

obj2.adress.state.district='New York'
obj2.adress.country='USA'
obj2.adress.state.pin=201308;

console.log(obj);
console.log(obj2);