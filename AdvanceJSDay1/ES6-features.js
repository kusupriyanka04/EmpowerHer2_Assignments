// const multiply = (a=1,b=1)=>{
//     return a*b;
// }
// console.log(multiply(3,4));
// console.log(multiply());


// const squareAndCube = n => ({ square : n*n, cube: n*n*n});
// console.log(squareAndCube(5));


// const people = [ 
//     { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
//     { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } 
// ];

// const result = people.map(({name, address: {city, street: {name: streetName } } } ) =>
//     `${name} lives in ${city} on ${streetName}`
// );
// console.log(result);


function mergeProfileUpdates(profile, updates) {
    return {
        ...profile,
        ...updates,
        address: {
            ...profile.address,
            ...updates.address
        }
    };
}
const profile = {name: "riya", age: 21, address:{city: "San Francisco", zipcode: "56904"}} ;
const updates = { age: 30, address: { zipcode: "56906", country: "USA" } };
const mergedProfile = mergeProfileUpdates(profile, updates);
console.log(mergedProfile);



