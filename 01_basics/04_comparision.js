/* Comparing same dataType */

//console.log(2 > 1);   output -> true
//console.log(2 >= 1);  output -> true
//console.log(2 < 1);   output -> false
//console.log(2 <= 1);  output -> false
//console.log(2 == 1);  output -> false
//console.log(2 != 1);  output -> true

/* Comparing different dataTypes */

//console.log("2" > 1);
//console.log("02" > 1);

/* In both cases output will be true because 
javaScript automatically change the string to number */

//console.log(null > 0);  output -> false
//console.log(null == 0); output -> false
//console.log(null >= 0); output -> true
//console.log(null <= 0); output -> true
//console.log(null != 0); output -> true
// null is empty value.

/* The reason is that an equality check == and comparisions >, <, >=, <= works differently.
Comparisions convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.  */

//console.log(undefined == 0);
//console.log(undefined > 0);
//console.log(undefined < 0);
// In this cases all are false.

// Strict Check "===" (check with triple equal)

console.log("2" === 2);

/* So, strict check also checks dataTypes 
in this case "2" is string and 2 is number. that's why it gives o/p as false. */

/* IMP -> Avoid null and undefined comparision beacuse it's confusioning.
 Our first priority is to keep the code the clean and readable */