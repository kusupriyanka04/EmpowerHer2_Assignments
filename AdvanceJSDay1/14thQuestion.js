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