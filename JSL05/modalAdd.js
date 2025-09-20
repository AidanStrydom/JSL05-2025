import { tasks, renderTasks } from "./scripts.js";

function setupAddTask() {
  const modal = document.getElementById("task-modal");
  const form = document.getElementById("task-form");
  const addBtn = document.getElementById("add-task-btn");
  const closeBtn = document.getElementById("close-modal-btn");

  let creating = false;

  // Open empty modal
  addBtn.addEventListener("click", () => {
    creating = true;
    form.reset();
    document.getElementById("task-status").value = "todo"; // default
    modal.showModal();
  });

  // Save task
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (creating) {
      tasks.push({
        id: Date.now(),
        title: document.getElementById("task-title").value,
        description: document.getElementById("task-desc").value,
        status: document.getElementById("task-status").value
      });
    }

    renderTasks();
    modal.close();
    creating = false;
  });

  // Close modal (Cancel button)
  closeBtn.addEventListener("click", () => {
    creating = false;
    modal.close();
  });

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      creating = false;
      modal.close();
    }
  });
}

document.addEventListener("DOMContentLoaded", setupAddTask);
