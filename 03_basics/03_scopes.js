// It is a global scope

//let a = 10    --> 10
//const b = 20  --> 20
//var c = 30    --> 30

var c = 300
let a = 100

// It is a block scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ", a);
    
}

console.log(a);   //--> a is not defined {true because a is inside a if block and we also not return the balue }
//console.log(b);   --> b (same)
//console.log(c);     --> 30 var problem so, avoid

/*      ********************** IMPORTANT POINTS **********************

When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers. */

var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2


function foo() {
    var z = 1;
    function bar() {
      var y = 2;
      console.log(z); // 1 (function `bar` closes over `x`)
      console.log(y); // 2 (`y` is in scope)
    }
    bar();
    console.log(z); // 1 (`x` is in scope)
    console.log(y); // ReferenceError, `y` is scoped to `bar`
  }
  
  foo();
  