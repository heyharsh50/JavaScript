// We can declare objects in two ways 1.Literal & 2.Constructor
// singleton (form from constructor not from literal)

// object declare
//Object.create constructor method (singleton)

const mySym = Symbol("Key1")

// object literals

const jsUser = {
    name: "Harsh",
    "Full name": "Harsh Raj",
    //mySym: "mykey1",
    [mySym]: "myKey1",
    age: 21,
    location: "Sikkim",
    email: "harsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// for access an object
console.log(jsUser.age);
console.log(jsUser["lastLoginDays"]);
console.log(jsUser["Full name"]);       //for line number 11 we have to use this method of access

//console.log(typeof jsUser["mySym"]);    //string type but we need symbol //line no. 14

console.log(jsUser[mySym]);

//changing object value
jsUser.email = "harsh@chatgpt.com"      //using equalto we can overwrite
console.log(jsUser["email"]);

//lock or freeze the objects value
//Object.freeze(jsUser)
jsUser.email = "harsh@openapi.com"

console.log(jsUser["email"]);
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hey, JS user !!");
}

jsUser.greetingTwo = function(){
    console.log(`Hey, Welcome ${this.name} !!`); // string interpolation ` ${this.name} `
}
//before string interpolation we concinate the string

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

