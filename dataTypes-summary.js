/* Important for Interview */

/* Two Types of data -> 1. Primitive and 2. Non-Primitive 
   1. Primitive -> Number, String, Boolean, Undefined, Null, BigInt, Symbol
   2. Non-Primitive (Refrence) -> Objects, Array, Functions
   
   Diffrence:-Primitive Data types are predefined and
   Non-Primitive data types are created by the programmer. */

/* JavaScript is a dynamically typed language.
Because data type will automatically assigned at the time of compilation or code execution. */

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */

//1.Primitive

//String
let alpha = "Hello" 
console.log(typeof alpha);
console.log(alpha);

//Number
const score = 100
console.log(typeof score);
console.log(score);

//Boolean
const isLoggedIn = true
console.log(typeof isLoggedIn);
console.log(isLoggedIn);

//Null
const outsideTemp = null
console.log(typeof outsideTemp);
console.log(outsideTemp);

//Undefined
let addValue
console.log(typeof addValue);
console.log(addValue);

//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);
console.log(typeof anotherId);
console.log(id);
console.log(anotherId);
console.log(id == anotherId);
// Use of symbol is if we pass same value (like string,...) then the result of id & anotherId is not same.

//BigInt
const bigNumber = 4787878967877678n
console.log(typeof bigNumber);
console.log(bigNumber);

//2.Non-Primitive

//Array
const homies = ["Harsh", "Yuvraj", "Samar", "Saurabh"]
console.log(typeof homies);
console.log(homies);

//Objects
let singleHomies = {
       name:"Harsh",
       age: 21
}
console.log(singleHomies);
// for single

let myHomies =[
       {name:"Harsh", age: 21,},
       
       {name:"Yuvraj", age: 21,},
       
       {name:"Samar", age: 21,},
       
       {name:"Saurabh", age: 21}
]
console.log(typeof myHomies);
console.log(myHomies);
// for multiple

/* storing the values in variable (singleHomies and myHomies).
 Inside the curly brackets is objects */

//Functions
const myFunction = function(){
       console.log("Hey, Harsh");

}
console.log(typeof myFunction);
myFunction();


