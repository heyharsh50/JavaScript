let score = 44      // number
let number = "46"  // string
let numbers = "46abc"

console.log(typeof score);
console.log(typeof (score)); // two ways two find types (1.normal & 2.as method inside parenthesis).
console.log(typeof number);

let valueInNumber = Number(number) // it is guarantee that the score is converted into number.
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valuesInNumbers = Number(numbers)
console.log(typeof valuesInNumbers);
console.log(valuesInNumbers);  // Not A Number

/* if in 'let numbers' instead of "46abc" if there is null, undefined, boolean
then its values are null -> 0, undefined -> NaN, true -> 1 & false -> 0 */

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);   // true if 1 & false if 0

/* if in 'let isLoggedIn' instead of 1 if there is "", "Harsh",
then its values are "" -> false, "Harsh" -> true*/

let someNumber = 48

let stringNumber = String(someNumber)  // using String and passing the someNumber.
console.log(typeof stringNumber);
console.log(stringNumber);

// output -> type is string and it will print 48.



/*if(true)
    if(false)
        console.log("A");
    else
        console.log("B");
else
    console.log("C");*/  // output --> B

