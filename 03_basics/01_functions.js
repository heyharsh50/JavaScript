//sayMyName --> refrence , () --> execution

// this below is function defination
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    
}

//sayMyName()     // for function call

/*function addTwoNumbers(number1, number2){       //function addTwoNumbers(parameters)
    console.log(number1 + number2);
    
}

addTwoNumbers(2, 3)         //addTwoNumbers(arguments)

function addTwoNumbers(number1, number2){

    let result = number1 + number2

    console.log("Hello");
    
    return result

    console.log("HEY");
    
}

/* after result it will not print anything */

/*const result = addTwoNumbers(5, 5)

console.log("Result: ", result);*/

function userLoggedIn(userName = "Test"){           //min this will print if argument pass then it will overwrite

    if(!userName){                  //if(userName === undefined)

        console.log("Please enter your name");
        return
    }
    return `${userName} just logged in !!`
}

//console.log(userLoggedIn("Harsh"))

console.log(userLoggedIn())     // undefined
