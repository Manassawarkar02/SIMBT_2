const completedListContainer = document.getElementById("completed-list-container");

function showCompletedTasks() {
  const completedTasks = JSON.parse(localStorage.getItem("completedTasks"));

  if (completedTasks) {
    for (let i = 0; i < completedTasks.length; i++) {
      const task = document.createElement("li");
      task.innerHTML = completedTasks[i];
      completedListContainer.appendChild(task);
    }
  }
}

showCompletedTasks();
