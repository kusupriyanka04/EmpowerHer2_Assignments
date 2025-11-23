// 18(a)
if (true) {
  let x = 10; // ReferenceError: x is not defined
  var y = 20;
}
console.log(y);
//console.log(x);
//Explain why:
// y is declared with var, which has function scope. Since it's not inside any function here, y is in the global scope. So, console.log(y) prints 20.
// x is declared with let, which has block scope. The if block is its scope. Since console.log(x) is outside this block, x is not accessible here, causing a ReferenceError.

// 18(b) optional chaining
console.log("---------------------------------");
const Uprofile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(Uprofile?.user?.details?.email);
console.log(Uprofile?.user?.details?.email?.phone);

// 18(c) 
console.log("----------------------------------");
const employee = {
    emname : "laya",
    branch : {
        department :" developer",
        id : 504
    } 
}
console.log(employee.contact.phone);
