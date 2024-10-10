const marvel_heros = ["IronMan", "Hulk", "Thor"]
const dc_heros = ["Superman", "Batman", "Flash"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);      //array can take any data here it takes array itself as data.
//console.log(marvel_heros[3][0]);

const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros);

/* this concat mthod combines two or more arrays and returns new array without modifying an existing array */

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const useable_array = another_array.flat(Infinity)  // .flat('depth') --> depth i.e 1, 2, ..

//console.log(useable_array);

/* flat will return a new array with all sub-array 
   elements concatenated into it recursively up to the specified depth. */

// When we do data scraping. (Data scraping involves pulling information out of a website and into a spreadsheet.)
// it come in the form of node list, object etc. but we want in array so, we use below methods

console.log(Array.isArray("Harsh"));    //asking is array or not ?
console.log(Array.from("Harsh"));       //converting into array

console.log(Array.from(Object.values({name: "Harsh"})));   //not directly converted we have to specify

/* if our intention is to convert the object's values into an array, we can use Object.values() */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
