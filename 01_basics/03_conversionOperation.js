let score = 44      // number
let number = "46"  // string
let numbers = "46abc"

//console.log(typeof score);
//console.log(typeof (score)); // two ways two find types (1.normal & 2.as method inside parenthesis).
//console.log(typeof number);

let valueInNumber = Number(number) // it is guarantee that the score is converted into number.
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let valuesInNumbers = Number(numbers)
//console.log(typeof valuesInNumbers);
//console.log(valuesInNumbers);  // Not A Number

/* if in 'let numbers' instead of "46abc" if there is null, undefined, boolean
then its values are null -> 0, undefined -> NaN, true -> 1 & false -> 0 */

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);   // true if 1 & false if 0

/* if in 'let isLoggedIn' instead of 1 if there is "", "Harsh",
then its values are "" -> false, "Harsh" -> true*/

let someNumber = 48

let stringNumber = String(someNumber)  // using String and passing the someNumber.
//console.log(typeof stringNumber);
//console.log(stringNumber);

// output -> type is string and it will print 48.

/****************************************Operations**************************************/

let value = 4
let negValue = -value
//console.log(negValue); // we assign negative value so, the output is -4.

/* basic operations */

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/2);
//console.log(2%3);

let str1 = "Hello"
let str2 = " Harsh"

let str3 = str1 + str2
//console.log(str3);

/* complex situtation with operations */

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + 2 + 2);
//console.log(1 + 2 + "2");

// If string is first then treat as string and if number is first then treat as number.
// ("1" + 2) -> treated as string first, (1+2+"2") treated as number first then string.


//console.log(true);  output -> true
//console.log(+true);  output -> 1   (conversion occurs)
//console.log(+"");  output -> 0

let gameCounter = 100
gameCounter++;  // ++gameCounter -> prefix  | gameCounter++ -> postfix 
// In prefix value increases first and in postfix value increases after the usaege.

//console.log(gameCounter);



/*if(true)
    if(false)
        console.log("A");
    else
        console.log("B");
else
    console.log("C");*/  // output --> B

