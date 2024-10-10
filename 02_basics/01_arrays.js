// Declaration of array

/* 1.Array is object, Storing a collection of multiple items under a single variable name 
   2.JavaScript arrays are resizeable and can contain a mix of different datatypes
            (resizeable means after declaration we can add more items) 
   3.To access array myArr[0](correct)  myArr["one"](incorrect)
   4.JavaScript array-copy operations create shallow copies. 
    (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
    Shallow Copy: When you copy an array, you get a new array that references the same items as the original.
    Deep Copy: If you want a complete copy (where changes in the copy do not affect the original), you need a deep copy. */

const myArr = [1, 2, 3, 4, 5, 6]
//console.log(myArr[0]);

const myHeros = ["IronMan", "Hulk", "CaptainAmerica", "DrDoom"]
//console.log(myHeros[3]);

const myArr1 = new Array(1, 2, 3, 4, 5)
//console.log(myArr1[3]);

// Array methods

/*myArr.push(7)
myArr.push(8)
myArr.pop()             //pop last element

myArr.unshift(9)        //insert item in starting of array
myArr.shift             //shift last item
console.log(myArr);

console.log(myArr.includes(9));     //it tells wheather the item is available in array or not.
console.log(myArr.indexOf(9));*/

const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);

/* join() will bind the myArr and newArr and convert it into the string */

// slice, splice

console.log("A ", myArr);       //original array

const myn1 = myArr.slice(0, 2)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(0, 2)
console.log(myn2);
console.log("C ", myArr);

// Output:-
/* A  [ 1, 2, 3, 4, 5, 6 ]
[ 1, 2 ]
B  [ 1, 2, 3, 4, 5, 6 ]
[ 1, 2 ]
C  [ 3, 4, 5, 6 ] */

/* the differnce b/w slice and splice is slice make a copy and splice cut from the original array */
