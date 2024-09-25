// (Premitive) --> uses stack memory & (Non-Premitive) --> uses heap memory
/* Whenever we use stack memory when we declare variable we gets copy of that 
   and In heap memory when we define variables, objects we get reference(Original Value) */

let myGithub = "heyharsh50"

let anotherGithub = myGithub
anotherGithub = "ysyuvraj40"

console.log(myGithub);

console.log(anotherGithub);

let userOne = {
    email: "test@gmail.com",
    upi: "test@ybl"
}

let userTwo = userOne

userTwo.email = "harsh@google.com" //dot for access (in object we access through dot)

console.log(userOne.email);
console.log(userTwo.email);

