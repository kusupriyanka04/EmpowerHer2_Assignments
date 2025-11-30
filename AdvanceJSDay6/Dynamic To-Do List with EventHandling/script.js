// //document.addEventListener('DOMContentLoaded', () =>{
//     const taskInput = document.getElementById('task-input');
//     const addTaskbtn = document.getElementById('add-task-btn');
//     const taskList = document.getElementById('task-list');

//     // Add task on button click
//     addTaskbtn.addEventListener('click', () => {
//         const taskText = taskInput.Value.trim();
//         if (taskText !== ''){
//             addTask(taskText);
//             taskInput.Value = '';  // clear input

//         }
//     });

//     // Function to add task to the list
//     function addTask(taskText){
//         const taskItem = document.createElement('li');
//         taskItem.innerHTML = `
//             <span>${taskText}</span>
//             <button class = "complete-btn">Complete</button>
//             <button class = "delete-btn">Delete</button>
//         `;
//         taskList.appendChild(taskItem);

//         // Event listeners for buttons
//         taskItem.querySelector('.delete-btn').addEventListener('click', () => {
//             taskItem.remove();
//         });
//         taskItem.querySelector('.complete-btn').addEventListener('click', () => {
//            taskItem.querySelector('span').classList.toggle('completed');
//         });
//     }
// //});

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return; // don't add empty tasks
  
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="complete">Complete</button>
    <button class="delete">Delete</button>
  `;
  taskList.appendChild(li);

  // Event listeners for buttons
  li.querySelector('.delete').addEventListener('click', () => li.remove());
  li.querySelector('.complete').addEventListener('click', () => {
    li.querySelector('span').style.textDecoration = 'line-through';
  });

  taskInput.value = ''; // clear input
});