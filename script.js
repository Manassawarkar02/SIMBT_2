const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
  if(inputbox.value === ''){
    alert("You must write something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  } 
  inputbox.value = "";
  saveData();

}

listcontainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classlist.toggle("checked");
    saveData();
  }
  else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  const tasks = listcontainer.getElementsByTagName("li");
  const completedTasks = [];
  const remainingTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].classList.contains("checked")) {
      completedTasks.push(tasks[i].innerHTML);
    } else {
      remainingTasks.push(tasks[i].innerHTML);
    }
  }

  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  localStorage.setItem("remainingTasks", JSON.stringify(remainingTasks));
}

function showtask(){
  listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();