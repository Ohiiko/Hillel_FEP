"use strict";
let newUl;
let newLi;


document.getElementById('addBtn') 
  .addEventListener('click', onClick);

function onClick(){
  creatUl();
  replaseUl();
  creatLi();
}

function creatUl(){
  newUl = document.createElement('ul');
  newUl.id = 'list';
}

function replaseUl(){
  let oldUl = document.getElementById('list');
  oldUl.replaceWith(newUl);
}

function creatLi(){
  for( let i = 1; i <= (document.getElementById('count').value); i++){
    newLi = document.createElement('li');
    newLi.innerHTML = i;
    newUl.append(newLi);
  }
}