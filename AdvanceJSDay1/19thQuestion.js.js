    
// 19 question
// 1. Template Literals + Expressions.
// a. Print: "5 + 7 = 12" using a template literal where the result is calculated inside ${ }.
console.log(`5 + 7 = ${5 + 7}`);

// b. Create a multi-line string using template literals (3 lines).
const greeting = `
Hello,
Gud morning
Have a nice day `
console.log(greeting);

// c. Given firstName = "John" and lastName = "Doe", print the full name using a template literal.

const firstName = "John";
const lastName = "Deo";
const fullName = `${firstName} ${lastName}`
console.log(fullName);

console.log("-----------------------------");

// 2. Arrow Functions & this

// a.
const square = n => {
    return n*n;
}
console.log(square(7));

// b. Explain why the following logs undefined:

// const obj = {
//   value: 50,
//   test: () => console.log(this.value)
// };
// obj.test();

// Explanation: This logs undefined because arrow functions(()=> {...}) in javascript do not have their own this context. Instead, they inherit the this of their lexical scope

// c.
const obj = {
  value: 50,
  test: function(){ console.log(this.value); }
};
obj.test();

console.log("-----------------------------");

//3. Rest, Spread & Copying Objects 
//a. Use spread to make a shallow copy of this object:
const product = { name: "Pen", price: 10 };
const copy ={...product };
console.log(copy);

// b. Merge these two objects using spread:
// const a = { x: 1 };
// const b = { y: 2 };
// console.log({...a, ...b})

// c.  Write a function maxValue(...nums) (rest operator) that returns the largest number. 
function maxValues(...nums){
    return Math.max(...nums);
}
console.log(maxValues(6,18,9,3,10));

console.log("-----------------------------");

// 4 Destructuring & Optional Chaining
// a. Destructure to extract a and b:
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a);
console.log(b);

// b. Destructure the object to extract brand:
const laptop = { brand: "Dell", ram: "8GB" };
const {brand, ram} = laptop;
console.log(brand);

// c. Safely access the following using optional chaining:
const info = {};
console.log(info?.data);

console.log("-----------------------------");

// 5 Scoping (let/var/const)

//a. What will this print?

for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// b.  What will this print?

// for (let j = 0; j < 3; j++) {}
// console.log(j);
//ReferenceError: j is not defined

// c. Why is const used for values that should not be reassigned?

//Explanation: In programming, const is used for values that should not be reassigned because it declares a constant variable. This means once a value is assigned to a const variable, it cannot be changed or reassigned later in the code. Using const helps in preventing accidental changes to values that are meant to remain constant throughout the execution of the program, making the code more predictable and easier to understand.

// 6.  Ternary Operator – Practice
// a. Convert this to a ternary:
let kmph = 90;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed)

// b.  Write a ternary that prints "Adult" if age ≥ 18, else "Minor".

// let age = 19;
// console.log(age >= 18 ? "Adult" : "Minor")

// c. Write a ternary to check: Positive → "Positive" Zero → "Zero" Negative → "Negative" (Hint: use nested ternary)
let num = 8;
let check = num > 0 ? "Positive":(num === 0 ? "Zero" : "Negative");
console.log(check); 

console.log("-----------------------------");

//7.  Spread, Rest & Arrays

//a. Add elements 4, 5 to this array using spread:
const nums = [1,2,3];
const nums2 = [...nums, 4,5];
console.log(nums2);

// b. Combine these arrays using spread:
const h = ["x","y"];
const r = ["z"];
const p = [...h, ...r];
console.log(p);

console.log("-----------------------------");

// 8. Object Destructuring & Shorthand

// a. Destructure the following:

// const user1 = { id: 101, status: "active" };
// const {id, status} = user1;
// console.log(id);
// console.log(status);

// b. Convert this to shorthand:
const id = 101;
const role = "admin";
const user2 = {
  id ,
  role
};
console.log(user2);

// c. Create an object using shorthand and add a method using shorthand syntax.
// const name = "John";
// const age = 30;

// const user = {
//   name,
//   age,
//   greet() {
//     console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
//   }
// };
// user.greet();

console.log("-----------------------------");

// 9 Template Literals (More Practice)

// a) Use a template literal to print today's date using: new Date().toDateString()
const todayDate = new Date().toDateString();
console.log(`Today's date is: ${todayDate}`);

// b) Create a template literal that prints: "Hello NAME, your score is SCORE/100"
const name = "Rahul";
const score = 85;
console.log(`Hello ${name}, your score is ${score}/100`);

console.log("-----------------------------");

// 10  Arrow Function Shorthands
// a. Convert a normal function to a one-line arrow function for addition.
const add = (a,b)=>a+b;
console.log(add(5,8));

// b. Write an arrow function isAdult(age) that returns true/false. 
const isAdult = age => age => 18;
console.log(isAdult(30));

// c. Create an arrow function double that doubles a number.
const double = n => n*n;
console.log(double(7));

console.log("-----------------------------");

// 11  Spread Operator (Arrays & Objects)
//a. Clone an array using spread.
const originalArray = [5, 6, 9, 10, 60];
const clonedArray = [...originalArray]
console.log(clonedArray);

// b. Add element 100 to the beginning of an array using spread.
const newArray = [100,...originalArray];
console.log(newArray);

// c. Merge two objects and override one property using spread.
const obj1 = {a: 1, b: 2};
const obj2 = {b: 20, c: 3};
const mergedObj = {...obj1, ...obj2 };
console.log(mergedObj);

console.log("-----------------------------");

// 12 Optional Chaining (More Practice)
// a. Access user.address.city safely:
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user?.address?.city);
// b. Access user.job.title safely (should print undefined).
console.log(user?.job?.title);

// c. Write an example where optional chaining prevents a runtime error.
const employee = {
    emname : "laya",
    branch : {
        department :" developer",
        id : 504
    } 
}
console.log(employee.contact.phone);