// 15(a)
const userName = "Priyanka";
const course = "JavaScript";
const msg = `Hello ${userName}, Welcome to the course ${course}`
console.log(msg)
console.log(`Hello ${userName}, Welcome to the ${course}`);
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
//15(c)
const getFullName = (first, last)=> `${first} ${last}`;
console.log(getFullName("kusu", "riya"));