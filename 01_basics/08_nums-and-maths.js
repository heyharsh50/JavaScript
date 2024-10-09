const score = 400        // It will automatically define as number type.
console.log(score);

const balance = new Number (1000) // It will explicitly define as number type.
console.log(balance);

// In console (webBrowser Inspect mode) if we call gameName it will give key values and prototypes.

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 49.9675
console.log(otherNumber.toPrecision(3)); // Output -> 50.0
console.log(otherNumber.toPrecision(1)); // Output -> 5e+1

/* It will return as string and must be range in 1-21 precision value.
    Imp -- if we give precision value i.e 2 it will give value before decimal for this case
            if we give value 3 then it will give value after decimal. */

const hundreds = 10000000
console.log(hundreds.toLocaleString()); // by default us standard format (O/P -> 10,000,000)
console.log(hundreds.toLocaleString('en-IN')); // we want in indian standard format (O/P -> 1,00,00,000)

/* Basically use to show standard format for hundereds for better view */

// ++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++

// It (Math) is a object in which there are various properties

console.log(Math);
console.log(Math.abs(-9));      // Negative to Positive & Positive remains same
console.log(Math.round(9.8));   // round off the number
console.log(Math.ceil(9.2));    // round off to highest only if it is below .5 also
console.log(Math.floor(9.9));   // round off to lowest 

console.log(Math.min(4, 9, 2, 8, 1));
console.log(Math.max(4, 9, 2, 8, 1));

console.log(Math.random());     // It will always give value between 0 & 1.

console.log(Math.random() *10);  // Here, We will shift in left but in case of 0.0234 goto line no. 44

// Let say we have to make dice so its value will range 1-6 So, for that
console.log((Math.random() *10 ) +1 );

/* here what we do is we multiply with 10 
    so, it will shift 1 number (i.e 0.6626 -> 6.626) and + 1 for 0 case (i.e 0.0234 -> 1.234) */

// For only 1 value not in decimal use floor and ceil concept
console.log(Math.floor(Math.random() *10 ) +1 );
console.log(Math.ceil(Math.random() *10 ) +1 );

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/* First we declare min & max value then print it so, logic is 
    random will generate number between 0 & 1 then
        it will multiply by (min - max + 1) value -> 11 then
            it wil give value (like 1.234, 2.434, 4.3,......) but it will not fulfill the
                required so, lastly we + min value to ensure that it will give b/w min & max*/