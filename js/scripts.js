// const message = prompt("'Hello, thank you for choosing Nikki's toDo App! What would you like to name this list?");
// console.log(message);
//
// const header = document.createTextNode(message);
// const newHeader = document.createElement('h2');
// newHeader.appendChild(message);
// document.getElementById('nameOfList').appendChild(newHeader);
//


function toDoList(){

  const item = document.getElementById('toDoInput').value
  const text = document.createTextNode(item);
  const newItem = document.createElement('li');
  const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteItem);
  newItem.appendChild(text);
  newItem.appendChild(deleteBtn);
  document.getElementById('toDoList').appendChild(newItem);
  document.forms[0].reset();
}
function deleteItem(){
  console.log(this.parentNode);
  this.parentNode.style.display ="none";
}
