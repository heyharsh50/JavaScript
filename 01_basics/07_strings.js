// String can be written in double as well as single inverted comma.

console.log('Hello ' + "World");  // output -> Hello World

const name = "Harsh" // it is also invoking the object but there is another way in line number 17.
const repoCount = 10

console.log(name + repoCount + " Repo"); // (using concinate i.e. [name + ... + ...])nowdays it is outdated to write like this.

/* Nowdays use Backticks [String Interpolation] in this we create placeholders 
    advantage of this we can direct injects the variables. */

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);
// output -> Hello my name is Harsh and my repo count is 10.
// It is more Reliable and modern way to implement and also good readable of code.

const gameName = new String ('heyharsh50')// (new is keyword) & (String is object)

// In console (webBrowser Inspect mode) if we call gameName it will give key values and prototypes

console.log(gameName [0]); // For access key
console.log(gameName.__proto__); // For access prototypes (syntax)
console.log(gameName.toUpperCase()); // It will print in uppercase {Output -> HEYHARSH50}

console.log(gameName.length); // Output -> 10

console.log(gameName.charAt(0)); // Output -> h

console.log(gameName.indexOf('h')); // Output -> 0
console.log(gameName.lastIndexOf('h')); // Output -> 7

const newString = gameName.substring(0, 4)
console.log(newString); // Output -> heyh

const anotherOne = gameName.slice(-7, 4)
console.log(anotherOne);

const anotherTwo = "    Harsh     "
console.log(anotherTwo);               // Output ->        Harsh
console.log(anotherTwo.trim());       // Output -> Harsh

/* So, trim method is use when we create input from
      and we don't want to store spaces in database. 
      There is alson start trim and end trim method but
      we use trim it will automatically include start and end */

const url = "https://harsh.com/harsh%20raj"

console.log(url.replace('%20', '-'));

/* So, replace method is use like 
    we want replace %20 or we want to replace harsh with other name.
    very easy to use like call replace and
     give parameters what you want to replace and replace of that what you use.
     i.e url.replace('replace %20', 'with -') */

console.log(url.includes('harsh')); // Output -> true

/* Let suppose we want to split Harsh-raj-20 in array format basis '-' 
    so, we use split method (seperator, limit) <- these are the parameters. */

const movieName = "Avengers-Marvel-IronMan"
console.log(movieName.split('-', 2));       // with limit parameter (O/P -> [ 'Avengers', 'Marvel' ])

console.log(movieName.split('-'));          // without limit parameter (O/P -> [ 'Avengers', 'Marvel', 'IronMan' ])

