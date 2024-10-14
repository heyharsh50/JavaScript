// objects de-structure

const course = {
    coursename: "C++",
    courseInstructor: "Hitesh",
    price: 999,
}

//console.log(course.courseInstructor);

const {courseInstructor : instructor} = course  // we short the name of courseInstructor to instructor (basically syntax)

//console.log(courseInstructor);
console.log(instructor);

/* this is the de-structure  */


// In react
/*const navbar = (props.company) => {         //instead of props we use {write here the value}

}

navbar(company = "Find Flames")

const navbar = ({company}) => {
        console.log();
        
}

navbar(company = "Find Flames")*/
 
// APIs
/* Jb bhi apna kaam kisi aur ke sir pe daldena hai usiko APIs kahte :)
    APIs --> kuch value aati h backend se use kaise likhte hai
        Pahle XML structure mai ata tha
        abhi sb values mostly JSON mai aati h
        
        // this is json (same as objects but not object :0)
        {
        
        } 
        
        syntax if we write like this it will treated as json*/


/*{
    "name": "Harsh",
    "regNo": 202100129,
    "branch": "CSE"
}*/

// In json key and values both treated like strings
// JSON in array format also
/*

[
    {},
    {},
    {},
]

*/

// To study api go to --> random user api (site) copy api
// then study else for simple study you can got json formatter and paste the copy api and study about the APIs
