"use strict" 
const DELETE_BTN_CLASS = 'deleteStikerBtn';
const CONTENT_NEW_CLASS = 'contentNewStiker';
const TITLE_NEW_STIKER_CLASS = 'titleNewStiker';

const titleDesck = document.getElementById('titleDesck');
const btnAddTask = document.getElementById('btnAddStiker');
const bodyBoard = document.getElementById('bodyBoard');
const newStikerElement = document.querySelector('newStikerElement');
const stikerItemTemplate = document.getElementById('stikerItemTemplate').innerHTML; 

let Stikers = [];

btnAddTask.addEventListener('click', onAddNewStikerBtnClick);
bodyBoard.addEventListener('click', onDeleteStikerBtnClick);
bodyBoard.addEventListener('focusout', onBoardElementFocusout);


function onAddNewStikerBtnClick(){
    const newStiker = creatNewStiker();
    Stikers.push(newStiker);
    addNewStikerOnBoard(newStiker);
}

function onDeleteStikerBtnClick(e){
    if(e.target.classList.contains(DELETE_BTN_CLASS)) {
    deleteTaskElement(e.target.parentElement.dataset.idTask);
    }  
}

function onBoardElementFocusout(e) {
    if (e.target.classList.contains(TITLE_NEW_STIKER_CLASS)) {
      updateSticker(e.target.parentElement.dataset.idTask, 'title', e.target.value);
    } else if (e.target.classList.contains(CONTENT_NEW_CLASS)) {
      updateSticker(e.target.parentElement.dataset.idTask, 'task', e.target.value);
    }
  }
  
init()

function init(){
    Stikers = getState();
    renderStikersOnBoard(Stikers);
}


function creatNewStiker(){
    return {
        id: Date.now(),
        'title': 'title',
        'task': 'text'
    }
}

function renderStikersOnBoard(stickers) { 
    stickers.forEach(sticker => addNewStikerOnBoard(sticker));  
  }

function addNewStikerOnBoard(elem){
    const newStiker = stikerItemTemplate.replace('{{id}}', elem.id)
                            .replace('{{title}}', elem.title)
                            .replace('{{task}}', elem.task);
    bodyBoard.insertAdjacentHTML('beforeend', newStiker);
    setState()
}   
    




function deleteTaskElement(id){
    Stikers = Stikers.filter(elem => elem.id != id);
    deleteStikerOnBoard(id);
    setState()
} 

function deleteStikerOnBoard(id){
    const taskStiker = bodyBoard.querySelector(`[data-id-task="${id}"]`);
    taskStiker && taskStiker.remove();
}

function getSticker(id) { 
    return Stikers.find(elem => elem.id == id);
  }

function updateSticker(id, property, value) {
    const sticker = getSticker(id);
    sticker[property] = value;
    setState();  
  }


function setState() {
    localStorage.setItem('board', JSON.stringify(Stikers))
  }
  
  function getState() {
    const stikersList = localStorage.getItem('board'); 
    return stikersList ? JSON.parse(stikersList) : [];
  }


