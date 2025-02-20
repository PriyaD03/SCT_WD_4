// Get elements
const taskInput = document.getElementById('task-input');
const dueDateInput = document.getElementById('due-date');
const taskList = document.getElementById('task-list');

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value;

  if (taskText === "") return;

  const taskItem = document.createElement('li');
  const taskContent = document.createElement('span');
  const taskDate = document.createElement('span');
  const markCompletedButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  taskContent.textContent = taskText;
  taskDate.textContent = dueDate ? `Due: ${new Date(dueDate).toLocaleString()}` : '';
  markCompletedButton.textContent = 'Complete';
  deleteButton.textContent = 'Delete';

  markCompletedButton.addEventListener('click', () => markCompleted(taskItem));
  deleteButton.addEventListener('click', () => deleteTask(taskItem));

  taskItem.appendChild(taskContent);
  taskItem.appendChild(taskDate);
  taskItem.appendChild(markCompletedButton);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  // Clear inputs
  taskInput.value = '';
  dueDateInput.value = '';
}

// Function to mark task as completed
function markCompleted(taskItem) {
  taskItem.classList.toggle('completed');
}

// Function to delete task
function deleteTask(taskItem) {
  taskItem.remove();
}
