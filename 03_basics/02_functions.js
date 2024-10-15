// Rest operator & Spread operator --> {...num1, ...num2}

//Array revision {Spread Operator}
/*const marvelHeros = ["IronMan", "SpiderMan", "Hulk", "DrDoom", "AntMan"]

const dcHeros = ["BatMan", "SuperMan", "Flash"]

console.log(marvelHeros);
console.log(dcHeros);

const allNewHeros = [...dcHeros, ...marvelHeros]

console.log(allNewHeros);*/

function calculateCartValue(...num1){
    return num1
}

//console.log(calculateCartValue(200, 300, 400, 500));    //Without using rest op we get only first value

//console.log(calculateCartValue(200, 300, 400, 500));

function cartValue(val1, val2, ...num1){
    return num1
}

//console.log(cartValue(200, 400, 600, 2000)); --> [ 600, 2000 ]
/* 200 assign to val1 & 400 assign to val2 and rest will in num1 as an array format using rest operator */

const user = {
    name: "Harsh",
    userId: 202100129,
}

function handleObject(object){

    //console.log(`Hey, ${object.name} your userId is ${object.userId}.`);
    console.log(`Hey, ${object.username} your userId is ${object.id}.`);
    
}

//handleObject(user)

handleObject({
    username: "Harsh Raj",
    id: 202100129
})

const myNewArray = [200, 400, 500, 600, 800]

function returnVal(getArray){
    return getArray[3]
}

console.log(returnVal(myNewArray));

console.log(returnVal([200, 400, 500, 800, 900]));

