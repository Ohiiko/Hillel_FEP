"use strict" 
const URL_PHOTO= `https://jsonplaceholder.typicode.com/photos`;
const container = document.getElementById('container');
const paginatItemTemplate = document.getElementById('paginatItemTemplate').innerHTML;
const galleryItemTemplate = document.getElementById('galleryItemTemplate').innerHTML;
const pagination = document.querySelector('.pagination');
const bigFoto = document.querySelector('.bigFoto');  
const styleBackgColor = document.querySelector('.styleBackgColor');

const photoOnPage = 50;
let photosList = [];
let idPageActiv = 1;

container.addEventListener('click', addBigFoto);
pagination.addEventListener('click', onPaginationClick)

init();

function init() {
    fetch(URL_PHOTO)
    .then(resp => resp.json()
    .then(setPhotoList)
    .then(setPaginationData)
    .then(() =>{showFoto(idPageActiv);}));
}


function setPhotoList(data){
    photosList = data;
}

function renderGaleryInterval(idPageActiv){

    return photosList.slice((idPageActiv -1) *photoOnPage, idPageActiv *photoOnPage);
}

function renderGaleryItems(list){
    const imagesHtml = list.map(elem => {
        return galleryItemTemplate.replace('{{url}}', elem.thumbnailUrl)
                                    .replace('{{title}}', elem.title)
                                    .replace('{{fullImageUrl}}', elem.url);
    });
    container.innerHTML = imagesHtml.join('\n');
}

function addBigFoto(event){
    console.log(event.target)
   let eventValue = event.target.src;
   let eventObj = photosList.find(item => item.thumbnailUrl == eventValue);
   let newImg = document.createElement('img');
   newImg.src = eventObj.url;
   bigFoto.appendChild(newImg);
   addClassActive();
}

function addClassActive(){
    bigFoto.classList.add('active');
    styleBackgColor.classList.add('active');
}

function onPaginationClick(e){
    idPageActiv = e.target.dataset.idPage;   
    showFoto(idPageActiv)
}

function setPaginationData(){
    let paginatorPage = Math.ceil(photosList.length/photoOnPage);
    idPageActiv = getIdPageActiv();
    idPageActiv = idPageActiv? JSON.parse(idPageActiv) : 1;
    createPaginator(paginatorPage)
}

function createPaginator(page){
    for (let i = 1; i < page+1; i++) {
        let newItemPage = document.createElement('li');
        newItemPage.classList.add('page-item');
        newItemPage.innerHTML = paginatItemTemplate.replace('{{idPage}}', i)
                                        .replace('{{numberPage}}', i)
       
        pagination.append(newItemPage);                         
    }; 
}

function showFoto(page){
    idPageActiv = page;
    setIdPageActiv(idPageActiv);
    renderGaleryItems(renderGaleryInterval(idPageActiv))    
}

function setIdPageActiv(value){
    return localStorage.setItem('idPageActiv', JSON.stringify(value))
}

function getIdPageActiv(){
    return localStorage.getItem('idPageActiv')
}
