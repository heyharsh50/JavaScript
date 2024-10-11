const tinderUser = {}                  //non-singleton object

//const tinderUser1 = new Object()         //singleton object

//console.log(tinderUser1);
//console.log(tinderUser);

tinderUser.id = "129rj"
tinderUser.name = "Harsh"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harsh",
            lastname: "Raj"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//console.log(regularUser.email);

//merging two objects
const obj1 = {
    1: 'a',             //key is 1 here and value is a
    2: 'b',
}

const obj2 = {
    3: 'c',
    4: 'd',
}

//const obj3 = Object.assign({}, obj1, obj2)  //{} --> act as target rest as source
//console.log(obj3);

// Example whait is done in when we merge two objects
/* const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true */

//spreading object same as array
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

//objects under array
const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id: 2,
        email: "h@gmail.com"
    },

    {
        id: 3,
        email: "h@gmail.com"
    }
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
