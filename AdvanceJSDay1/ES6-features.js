
// 19 question
// 1st
console.log(`5 + 7 = ${5 + 7}`);

const greeting = `
Hello,
Gud morning
Have a nice day `
console.log(greeting);

const firstName = "John";
const lastName = "Deo";
const fullName = `${firstName} ${lastName}`
console.log(fullName);

// 2nd

const square = n => {
    return n*n;
}
console.log(square(7));

//This logs undefined because arrow functions(()=> {...}) in javascript do not have their own this context. Instead, they inherit the this of their lexical scope

const obj = {
  value: 50,
  test: function(){ console.log(this.value); }
};
obj.test();

//3rd
const product = { name: "Pen", price: 10 };
const copy ={...product };
console.log(copy);


// const a = { x: 1 };
// const b = { y: 2 };
// console.log({...a, ...b})

function maxValues(...nums){
    return Math.max(...nums);
}
console.log(maxValues(6,18,9,3,10));

// 4th
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a);
console.log(b);

const laptop = { brand: "Dell", ram: "8GB" };
const {brand, ram} = laptop;
console.log(brand);

const info = {};
console.log(info?.data);

// 5th
for (var i = 0; i < 3; i++) {}
console.log(i);
// 3

// for (let j = 0; j < 3; j++) {}
// console.log(j);
//ReferenceError: j is not defined

//In programming, const is used for values that should not be reassigned because it declares a constant variable. This means once a value is assigned to a const variable, it cannot be changed or reassigned later in the code. Using const helps in preventing accidental changes to values that are meant to remain constant throughout the execution of the program, making the code more predictable and easier to understand.

let kmph = 90;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed)

// let age = 19;
// console.log(age >= 18 ? "Adult" : "Minor")

let num = 8;
let check = num > 0 ? "Positive":(num === 0 ? "Zero" : "Negative");
console.log(check); 

//7th

const nums = [1,2,3];
const nums2 = [...nums, 4,5];
console.log(nums2);

const h = ["x","y"];
const r = ["z"];
const p = [...h, ...r];
console.log(p);


// 8th
// const user1 = { id: 101, status: "active" };
// const {id, status} = user1;
// console.log(id);
// console.log(status);

const id = 101;
const role = "admin";
const user2 = {
  id ,
  role
};
console.log(user2);

const name = "John";
const age = 30;

const user = {
  name,
  age,
  greet() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  }
};

user.greet();