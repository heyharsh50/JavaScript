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