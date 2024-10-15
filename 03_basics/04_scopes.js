//First Visit Javascript /03_basics /03_scopes

/*function foo() {
    var z = 1;
    var y = 300;
    function bar() {
      var y = 2;
      console.log(z); // 1 (function `bar` closes over `x`)
      console.log(y); // 2 (`y` is in scope)
    }
    bar();
    console.log(z); // 1 (`x` is in scope)
    console.log(y); // ReferenceError, `y` is scoped to `bar` | we add var y = 300 in foo()
  }                // so, instead of error it will print 300
  
  foo();*/

// Simple Example {Nested Functions}

function one(){

  const userName = "Harsh"

  function two(){

    const website = "GitHub"
   // console.log(userName);
    
  }
  //console.log(website);
  
  two()

}

one()

/* ***************** Importants Points *****************

1. Concept is simple {Think like --> child can take icecream of father but father will not take child's icecream }

2. It will execute line by line. That's why it will not execute two() because in line 30 error

*/

if(true){
  const username = "Harsh"

  if(username === "Harsh"){
    const webSite = " GitHub"
    //console.log(username + webSite);

  }
  //console.log(webSite); ReferenceError: webSite is not defined
  
}
//console.log(username);  ReferenceError: username is not defined


// ++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++

addOne(5)   // it will execute with 0 error

function addOne(num1){

  return num1 + 1

}

console.log(addOne(5));


addTwo(6)   // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num2){

  return num2 + 2

}

//console.log(addTwo(6));
