//17(a)Use spread operator to merge:
arr1 = [1, 2, 3];
arr2 = [4, 5];
console.log([...arr1, ...arr2])

console.log("-----------------------------");
// 17(b)Create a function sum(...nums) using rest operator that returns the sum of all numbers.
function add(...nums){
    let total = 0;
    for(let n of nums) total += n;
       console.log(total);
}
add(18, 7, 4);
add(18, 2);

console.log("-----------------------------");
// 17(c)
const user = {
  username: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const {username, address: {city, pin} } = user;

console.log(username);
console.log(city);
console.log(pin);
