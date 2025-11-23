// 16(a) Write an arrow function isEven(n) that returns true if even, else false.
const isEven = n => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(7));

console.log("-----------------------------");
// 16(b)ternary operator
const marks = 60
const grade = marks >= 35 ? "pass" : "fail";
console.log(grade);

console.log("-----------------------------");
//16(c)Write an arrow function greet(name) that prints: "Hello, " If no name is passed, print "Guest" using the ternary operator.
const greet = (name) => console.log(`Hello, ${name ? name: "guest"}
    `);
    greet("sandya");
    greet();