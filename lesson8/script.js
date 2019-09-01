"use strict";

document.getElementById('addBtn') 
  .addEventListener('click', onClick);

function onClick(){
  const newUl = document.createElement('ul');
  newUl.id = 'list';
  list.replaceWith(newUl);
  
  for( let i = 1; i <= (document.getElementById('count').value); i++){
    let newLi = document.createElement('li');
    newLi.innerHTML = i;
    newUl.append(newLi);
  }
}
