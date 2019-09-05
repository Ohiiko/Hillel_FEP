"use strict";

const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
let enter = document.getElementById('count');


addBtn.addEventListener('click', onClick);
list.addEventListener('click', changeStyle);


function onClick(){
  creatCancelBtn ();
}

function createNewTask(){
  const newLi = document.createElement('li');
  newLi.innerHTML = enter.value;
  list.append(newLi); 
  return newLi;
}

function creatCancelBtn (){
  const newLi = createNewTask();
  let cancelBtn = document.createElement('b');
  newLi.append(cancelBtn);
  cancelBtn.classList.add('after');
  listenDeleteTask(cancelBtn);
}

function changeStyle(e){
  e.target.classList.toggle('clicked');
}

function listenDeleteTask(e) {
  e.addEventListener("click", () => {
    e.parentElement.remove();
    event.stopPropagation();
  });
}

// keyPressed();

// function keyPressed(){
//   addEventListener("keydown", (e) => {
//     const keyEnter = 13;
//     if (e.which == keyEnter) {
//       onClick();
//     }
//   });
// }

