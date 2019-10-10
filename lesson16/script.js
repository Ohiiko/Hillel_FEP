"use strict" 
const container = document.getElementById('container');
const bigFoto = document.querySelector('.bigFoto');  
const styleBackgColor = document.querySelector('.styleBackgColor');
const prom = fetch(`https://jsonplaceholder.typicode.com/photos?_limit=50`);

prom.then(resp => 
    resp.json().then((data) =>
    {init(data);}));


function init(data) {
    addsmallFoto(data);
    container.addEventListener('click', () => addBigFoto.call(data, event));
}

function addsmallFoto(data){
    for (let i = 0; i < data.length; i++) {
    let newItem = document.createElement('li');
    let newImg = document.createElement('img');
    newItem.classList.add('fotoItem');
    newImg.src = data[i].thumbnailUrl;
    newItem.appendChild(newImg);
    container.appendChild(newItem);
    }
}

function addBigFoto(event){
   let eventValue = event.target.src;
   let eventObj = this.find(item => item.thumbnailUrl == eventValue);
   let newImg = document.createElement('img');
   newImg.src = eventObj.url;
   bigFoto.appendChild(newImg);
   addClassActive();
}

function addClassActive(){
    bigFoto.classList.add('active');
    styleBackgColor.classList.add('active');
}


