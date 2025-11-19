function countCategories(arr) {
    // Use reduce() to count occurrences of each category
    const categoryCounts = arr.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    return categoryCounts;
}

// Example usage
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
console.log(countCategories(categories)); // Output: { electronics: 2, clothing: 2, toys: 3 }

// Extra Challenge: Sort categories by count in descending order
function countAndSortCategories(arr) {
    const categoryCounts = arr.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    // Sort categories by count in descending order
    return Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([category]) => category);
}

// Example usage for extra challenge
console.log(countAndSortCategories(categories)); // Output: [ 'toys', 'electronics', 'clothing' ]