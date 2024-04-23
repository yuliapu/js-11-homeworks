"use strict";

// const
const TASKS_STORAGE_KEY = "tasks";

// DOM variables
const form = document.querySelector(".create-task-form");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-tasks");
const filterInput = document.querySelector(".filter-input");

// "storage" functions
const getTasksFromStorage = () => {
  return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY)) || [];
};

const storeTaskInStorage = (newTask) => {
  const tasks = getTasksFromStorage();
  tasks.push(newTask);

  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const clearTasksFromStorage = () => {
  localStorage.removeItem(TASKS_STORAGE_KEY);
};

const removeTaskFromStorage = (deletedTask) => {
  const tasks = getTasksFromStorage();
  const deletedIndex = tasks.findIndex((task) => task.id == deletedTask.id);
  tasks.splice(deletedIndex, 1);

  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const getLiTemplate = (value) => `${value} <i class="fa fa-edit edit-item"></i> <i class="fa fa-remove delete-item"></i>`;

const updateTaskInStorage = (updatedTask) => {
    const tasks = getTasksFromStorage();
    const updatedIndex = tasks.findIndex((task) => task.id == updatedTask.id);
    tasks.splice(updatedIndex, 1, updatedTask);

    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  };
  
//

// "tasks" functions
const appendLi = (task) => {
  // Create and add LI element
  const li = document.createElement("li");
  // li.textContent = value; // Значення яке ввів користувач
  li.innerHTML = getLiTemplate(task.value);
  taskList.append(li);
  li.dataset.id = task.id;
};

const addTask = (event) => {
  event.preventDefault();

  // Перевірка на пусте значення
  const value = taskInput.value.trim();
  if (value === "") {
    return;
  }

  let task = {id: Date.now(), value: value};

  appendLi(task);

  // Очистити форму
  // 1 - скидає значення у input'a taskInput
  taskInput.value = "";
  // 2 - скидає всі значення форми
  // form.reset();

  // Фокусуємось на input
  taskInput.focus();

  // Зберігаємо елемент у localStorage
  storeTaskInStorage(task);
};

const clearTasks = () => {
  taskList.innerHTML = "";
  clearTasksFromStorage();
};

const removeTask = (event) => {
  const isDeleteButton = event.target.classList.contains("delete-item");
  if (!isDeleteButton) {
    return;
  }

  const isConfirmed = confirm("Ви впевнені що хочете видалити це завдання?");
  if (!isConfirmed) {
    return;
  }

  const li = event.target.closest("li");
  li.remove();

  // Видалити зі сховища
  let deletedTask = {id: li.dataset.id, value: li.textContent.trim()};
  removeTaskFromStorage(deletedTask);
};

const editTask = (event) => {
  const isEditButton = event.target.classList.contains("edit-item");
  if (!isEditButton) {
    return;
  }

  const li = event.target.closest("li");
  const updatedText = prompt("Будь ласка, введіть нову назву для завдання.", li.textContent);
  if (!updatedText) {
    return;
 }
    
  li.innerHTML = getLiTemplate(updatedText);
  updateTaskInStorage({id: li.dataset.id, value: updatedText});
};
  
const filterTasks = ({ target: { value } }) => {
  const text = value.toLowerCase();
  const list = taskList.querySelectorAll("li"); // []

  list.forEach((li) => {
    const liText = li.textContent.trim().toLowerCase();

    // if (liText.includes(text)) {
    //   li.hidden = false;
    // } else {
    //   li.hidden = true;
    // }
    li.hidden = !liText.includes(text);
  });
};

const initTasks = () => {
  const tasks = getTasksFromStorage();
  // tasks.forEach((task) => appendLi(task));
  tasks.forEach(appendLi);
};

// Init
initTasks();

// Event listeners
// onsubmit
form.addEventListener("submit", addTask);

clearButton.addEventListener("click", clearTasks);

taskList.addEventListener("click", removeTask);

taskList.addEventListener("click", editTask);

filterInput.addEventListener("input", filterTasks);