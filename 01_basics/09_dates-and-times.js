// Dates

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate); //Object


console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

// creating our own date
let myNewDate = new Date(2025, 0, 20)
console.log(myNewDate.toDateString());

let myCreatedDate = new Date(2025, 1, 20, 20, 3, 5)
console.log(myCreatedDate.toLocaleString());

/* we created date by passing some parameters in new Date(year, month, date, hr, min, sec)
    and here one thing to keep in mind that month always start with 0 (i.e January) 
    (only in single digit because it is array) */

// More ways to declare dates
let myDateOne = new Date("2025-01-14")          // yyyy-mm-dd
console.log(myDateOne.toLocaleString());

let myDateTwo = new Date("01-14-2025")          // mm-dd-yyyy
console.log(myDateTwo.toLocaleString());

/* Here month start with 01 & previously because of array it will start from 0. */

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myDateTwo.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toDateString());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);        // increase the current month by 1

// String Interpolation
console.log(`Today date is ${newDate.toDateString()} and the time is ${newDate.toTimeString()}.`);

newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate);  // Output -> 2024-10-09T17:47:24.376Z
