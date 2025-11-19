const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

// Step 1: Filter employees who completed more than 5 tasks
const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);

// Step 2: Map to new array with name and performance level
const mappedEmployees = filteredEmployees.map(employee => {
  let performanceLevel;
  if (employee.rating > 4.5) performanceLevel = "Excellent";
  else if (employee.rating >= 3 && employee.rating <= 4.5) performanceLevel = "Good";
  else performanceLevel = "Needs Improvement";
  return { name: employee.name, performanceLevel };
});

// Step 3: Sort based on performance level
const performanceOrder = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
const sortedEmployees = mappedEmployees.sort((a, b) => performanceOrder[b.performanceLevel] - performanceOrder[a.performanceLevel]);

// Step 4: Return final sorted array
console.log(sortedEmployees);