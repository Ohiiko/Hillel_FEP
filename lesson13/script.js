"use strict";
class Gallery{
    constructor (elem){
        this.elem = elem;
        this.itemFoto = null;
        this.wrap = document.createElement('div');
        this.photosCount = this.elem.children.length;
        this.fotoGallery();       
    }

    static wrappers = 'slider';
    static fotoBox = 'slider-items';
    static classItems = 'item';
    static backFoto = 'left-slide';
    static forwardFoto = 'right-slide';
    static showFoto = 'active';



    fotoGallery(){    
        this.creatWrapper();
        this.creatClassName();
        this.creatBtn();
        this.show(0);
        this.nextFoto.addEventListener('click', () => this.next());
        this.prevFoto.addEventListener('click', () => this.prev());
        setInterval(() => this.next(), 3000);
    }

    creatWrapper(){
        this.wrap.classList.add(Gallery.wrappers);
        this.elem.before(this.wrap);
        this.wrap.prepend(this.elem);
    }

    creatClassName(){
        this.elem.classList.add(Gallery.fotoBox);
        for (let i = 0; i < this.photosCount; i++) {
        this.elem.children[i].classList.add(Gallery.classItems);
        }
       
    }

    creatBtn(){
        this.prevFoto = document.createElement('span');
        this.nextFoto = document.createElement('span');
        this.wrap.append(this.prevFoto);
        this.prevFoto.innerHTML = '<';
        this.prevFoto.classList.add(Gallery.backFoto);
        this.wrap.append(this.nextFoto);
        this.nextFoto.innerHTML = '>';
        this.nextFoto.classList.add(Gallery.forwardFoto);
    }

    show(i){
        if(this.elem.children[i]){
            this.addActivClass(this.elem.children[i]);
        }
    
    }

    addActivClass(el){
        this.removeItemFoto();
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
            this.show(this.photosCount-1);
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
