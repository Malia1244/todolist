document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");
  const words = document.getElementById("taskInput");

  button.addEventListener("click", function() {
    alert(words.value);

const newItem = document.createElement("li");
newItem.textContent = words.value;
taskList.appendChild(newItem);
words.value = ""; 
  });
});
