let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");

addBtn.addEventListener("click", addTask);
searchInput.addEventListener("keyup", searchTasks);

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks(list = tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  list.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";

    const text = document.createElement("span");
    text.textContent = task.text;
    if (task.completed) text.classList.add("completed");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.className = "btn-complete";
    completeBtn.onclick = () => toggleComplete(task.id);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.className = "btn-remove";
    removeBtn.onclick = () => removeTask(task.id);

    div.appendChild(text);
    div.appendChild(completeBtn);
    div.appendChild(removeBtn);

    taskList.appendChild(div);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  const newTask = {
    id: Date.now(),
    text: input.value,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  displayTasks();
  input.value = "";
}

function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  displayTasks();
}

function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  displayTasks();
}

function searchTasks() {
  const term = searchInput.value.toLowerCase();
  const filtered = tasks.filter(task =>
    task.text.toLowerCase().includes(term)
  );
  displayTasks(filtered);
}

// Initial load
displayTasks();