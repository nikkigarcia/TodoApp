// var toDo = ["Buy Cake"];
// var input = prompt("What would you like to do?");
// while(input !== "quit"){
//   if(input === "list"){
//     listtoDo();
//   } else if (input === "add"){
//     addtoDo();
//   }else if(input === "delete"){
//     deletetoDo();
//   }
//   input = prompt("What would you like to do")
// }
// console.log("Ok, You quit the app.");
//
// function listtoDo(){
//   console.log("listtoDo")
//   toDo.forEach(function(toDo, i){
//     console.log(i + "! " + toDo);
//   });
//   console.log("listtoDo")
// }
//
// function addtoDo(){
//   var addtoDo = prompt ("Add to List");
// }

// const input = prompt('What do you want to add to your list?');
// forEach(input)
const addToList = document.querySelector('add');
add.textContent = 'Add To List';
add.addEventListener = ('click', () => prompt('What do you want to add to your list?'));
document.body.appendChild('add');
