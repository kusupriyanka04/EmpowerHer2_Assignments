// 16(a)
const isEven = n => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(7));

// 16(b)
const marks = 60
const grade = marks >= 35 ? "pass" : "fail";
console.log(grade)

//16(c)
const greet = (name) => console.log(`Hello ${name || "guest"}
    `);
    greet("sandya");
    greet();