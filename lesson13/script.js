"use strict";
class Gallery{
    constructor (elem){
        this.elem = elem;
        this.itemFoto = null;
        this.wrap = document.createElement('div');
        this.allFoto = document.getElementById('container');
        this.totalFoto = this.elem.children.length;
        this.prevFoto = document.createElement('span');
        this.nextFoto = document.createElement('span');
        this.FotoGallery();       
    }

    FotoGallery(){    
        this.creatWrapper();
        this.creatClassName();
        this.creatBtn();
        this.show(0);
        this.nextFoto.addEventListener('click', () => this.next());
        this.prevFoto.addEventListener('click', () => this.prev());
        setInterval(() => this.next(), 3000);
    }

    creatWrapper(){
        Gallery.wrappers = 'slider';
        this.wrap.classList.add(Gallery.wrappers);
        this.allFoto.before(this.wrap);
        this.wrap.prepend(this.allFoto);
    }

    creatClassName(){
        Gallery.fotoBox = 'slider-items';
        Gallery.classItems = 'item';
        this.elem.classList.add(Gallery.fotoBox);
        for (let i = 0; i < this.totalFoto; i++) {
        this.elem.children[i].classList.add(Gallery.classItems);
        }
       
    }

    creatBtn(){
        this.wrap.append(this.prevFoto);
        this.prevFoto.innerHTML = '<';
        Gallery.backFoto = 'left-slide';
        this.prevFoto.classList.add(Gallery.backFoto);
        this.wrap.append(this.nextFoto);
        this.nextFoto.innerHTML = '>';
        Gallery.forwardFoto = 'right-slide';
        this.nextFoto.classList.add(Gallery.forwardFoto);
    }

    show(i){
        if(this.elem.children[i]){
            this.addActivClass(this.elem.children[i]);
        }
    
    }

    addActivClass(el){
        this.removeItemFoto();
        Gallery.showFoto = 'active';
        this.itemFoto = el;
        this.itemFoto.classList.add(Gallery.showFoto);
    }

    removeItemFoto(){

        this.itemFoto && this.itemFoto.classList.remove(Gallery.showFoto);
    }

    next(){
        this.nextShow = this.itemFoto.nextElementSibling;
        if (this.nextShow){
            this.addActivClass(this.nextShow);
        }else if(!this.nextShow){
            this.show(0);
        }
    }

    prev(){
        this.prevShow = this.itemFoto.previousElementSibling;
        if (this.prevShow){
            this.addActivClass(this.prevShow);
        }else if(!this.prevShow){
            this.show(this.totalFoto-1);
        }  
    }   
}



const myGallery = new Gallery(
                        document.getElementById('container')
                        )

/* Опциональное задание - реализовать такие методы */

// myGallery.show(2);
// myGallery.next();
// myGallery.prev();
