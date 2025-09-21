 import { initialTasks } from "./initialData.js";

/**
 * Creates a single task DOM element.
 * @param {Object} task - Task data object.
 * @param {string} task.title - Title of the task.
 * @param {number} task.id - Unique task ID.
 * @param {string} task.status - Status column: 'todo', 'doing', or 'done'.
 * @returns {HTMLElement} The created task div element.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}

/**
 * Finds the task container element based on task status.
 * @param {string} status - The task status ('todo', 'doing', or 'done').
 * @returns {HTMLElement|null} The container element, or null if not found.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders all tasks from initial data to the UI.
 * Groups tasks by status and appends them to their respective columns.
 * @param {Array<Object>} tasks - Array of task objects.
 */
function renderTasks(tasks) {
  tasks.forEach((task) => {
    renderTask(task);
  });
}

function renderTask(task) {
  const container = getTaskContainerByStatus(task.status);
  if (container) {
    const taskElement = createTaskElement(task);
    container.appendChild(taskElement);
  }
}

function addTaskFromModal() {
  const title = document.getElementById("add-task-title").value.trim();
  const description = document.getElementById("add-task-desc").value.trim();
  const status = document.getElementById("add-task-status").value;

  var tasks = JSON.parse(localStorage.getItem("tasks"));

  const newTask = {
    id: 20,   // unique ID (doesnt seem right to me)
    title: title,
    description: description,
    status: status,
    board: "Launch Career"
  };

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("Tasks:", newTask); // ✅ see updated array in console
}


/**
 * Opens the modal dialog with pre-filled task details.
 * @param {Object} task - The task object to display in the modal.
 */
function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

/**
 * Opens the modal dialog with empty task fields.
 */
function openAddModal() {
  const modal = document.getElementById("add-task-modal");
  const titleInput = document.getElementById("add-task-title");
  const descInput = document.getElementById("add-task-desc");
  const statusSelect = document.getElementById("add-task-status");

  titleInput.value = "";
  descInput.value = "";
  statusSelect.value = "todo";

  modal.showModal();
}

/**
 * Sets up modal close behavior.
 */
function setupButtonsHandler() {
  /*edit modal close*/
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  closeBtn.addEventListener("click", () => {
    modal.close();
  });

  /*add modal close*/
  const addModal = document.getElementById("add-task-modal");
  const addCloseBtn = document.getElementById("add-close-modal-btn");
  addCloseBtn.addEventListener("click", () => {
    addModal.close();
  });

  /*add modal open*/
  const addTaskBtn = document.getElementById("add-new-task-btn");
  addTaskBtn.addEventListener("click", () => {
    openAddModal();
  });

  /*add submit button*/
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", () => {
    addTaskFromModal();
  });
}

/**
 * Initializes the task board and modal handlers.
 */
function initTaskBoard() {
  clearExistingTasks(); 
  var tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks === null) {
    localStorage.setItem("tasks", JSON.stringify(initialTasks));
    tasks = initialTasks; 
  }
  renderTasks(tasks);
  setupButtonsHandler();
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTaskBoard);


