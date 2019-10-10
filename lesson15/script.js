"use strict" 

const addContact = document.getElementById('addContact');
const contactSurnameInput = document.getElementById('contactSurnameInput');
const contactNameInput = document.getElementById('contactNameInput');
const contactTelephoneInput = document.getElementById('contactTelephoneInput');
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
    const contact = {
        surname:  contactSurnameInput.value, 
        name:  contactNameInput.value,
        telephone:  contactTelephoneInput.value};

    addContactValue(contact);
    resetForm();
}

function addContactValue(value){
    const contactElem = document.createElement('div');
    contactElem.classList.add('contact');
    contactList.appendChild(contactElem);
    contactElem.innerHTML = contactItemTemplate
                            .replace('{{surname}}', value.surname)
                            .replace('{{name}}', value.name)
                            .replace('{{telephone}}', value.telephone);
}

function resetForm(){
    addContact.reset();
}


function deleteTask(el){
    el.remove();
}
