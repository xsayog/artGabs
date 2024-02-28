document.addEventListener("DOMContentLoaded", function () {
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskInputContainer = document.getElementById("taskInputContainer");
  const taskInput = document.getElementById("taskInput");
  const submitTask = document.getElementById("submitTask");
  const todoList = document.getElementById("todoList");

  // Toggle display of task input on click
  addTaskBtn.addEventListener("click", function () {
    taskInputContainer.style.display =
      taskInputContainer.style.display === "none" ? "block" : "none";
  });

  // Add task to the list
  submitTask.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const newTask = document.createElement("li");
      newTask.innerHTML = `
        <p>${taskText}</p>
        <div class="actions">
          <button class="edit-btn"><i class='bx bx-edit'></i></button>
          <button class="delete-btn"><i class='bx bx-trash'></i></button>
          <button class="mark-btn"><i class='bx bx-check'></i></button>
        </div>
      `;
      todoList.appendChild(newTask);
      taskInput.value = "";
    }
  });
});
