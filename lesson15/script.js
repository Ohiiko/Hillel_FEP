"use strict" 

const addContact = document.getElementById('addContact');
const contactNameInput = document.getElementById('contactNameInput');
const contactList = document.getElementById('contactList');
const contactItemTemplate = document.getElementById('contactItemTemplate').innerHTML;


addContact.addEventListener('submit', onAddContactFormSubmit);
contactList.addEventListener('click', onContaktListClick);

function onAddContactFormSubmit(event){
    event.preventDefault();

    submitForm();
}


function onContaktListClick(event){
    if(event.target.classList.contains('delete-btn') && event.target.parentElement != document.querySelector('.contact')){
        deleteTask(event.target.parentElement);
    }
}

function submitForm(){
    const surname = { title: contactNameInput.value };
    const name = { title: contactNameInput2.value };
    const telephone = { title: contactNameInput3.value };


    addContactValue(surname);
    addContactValue(name);
    addContactValue(telephone);
    creatContact()
    resetForm();
}

function creatContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contactList.appendChild(contact);
    addContactItem(contact);
    addDelBtn(contact);
    
}

function addContactItem(contact){
    let elementsContact = document.querySelectorAll('.contact-list > .new');
    for (let elem of elementsContact) {
        contact.appendChild(elem);
    }
}

function addDelBtn(contact){
    let delBtn = document.querySelector('.delete-btn');
    let newDelBtn = delBtn.cloneNode(true);
    contact.appendChild(newDelBtn);
}

function addContactValue(value){
    const html = contactItemTemplate.replace('{{title}}', value.title);
    const newContactEl = htmlToElement(html)
    contactList.appendChild(newContactEl);
    
    
}

function resetForm(){
    addContact.reset();
}


function deleteTask(el){
    el.remove();
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}