// 15(a) Create a variable username and course and print: "Hello , welcome to the course!" using template literals.
const userName = "Priyanka";
const course = "JavaScript";
const msg = `Hello ${userName}, Welcome to the course ${course}`
console.log(msg)
console.log(`Hello ${userName}, Welcome to the ${course}`);

console.log("-----------------------------");
// 15(b)
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};
console.log(student);

console.log("-----------------------------");
//15(c) Create a function getFullName(first, last) using arrow function shorthand (no return keyword).
const getFullName = (first, last)=> `${first} ${last}`;
console.log(getFullName("kusu", "riya"));