"use strict" 

const URL_ALL_USERS = `https://jsonplaceholder.typicode.com/users`;
const USER_NAME_TEMPLATE = document.getElementById('userNameTemplate').innerHTML;
const INVISIBLE_CLASS = 'invisible';

const allUsersList = document.getElementById('allUsersList');
const userDetail = document.getElementById('userDetail');
const userDetailForm = document.getElementById('userDetailForm');
const idInputItem = document.getElementById('idInput');
const nameInputItem = document.getElementById('nameInput');
const usernameInputItem = document.getElementById('usernameInput');
const phoneInputItem = document.getElementById('phoneInput');
const emailInputItem = document.getElementById('emailInput');
const addNewUserBtn = document.getElementById('addNewUserBtn');
const deleteUserBtn = document.getElementById('deleteUserBtn');
const saveUserBtn = document.getElementById('saveUserBtn');


allUsersList.addEventListener('click', onUserDetail);
addNewUserBtn.addEventListener('click', defaultValue);
deleteUserBtn.addEventListener('click', onDeleteUser);
userDetailForm.addEventListener('submit', onSaveUser);

requestJson(URL_ALL_USERS)
    .then(addAllUsers)

    
function requestJson(url){
    return fetch(url)
            .then(resp => resp.json())
            .catch(error => console.warn(error));
}

function onUserDetail(e){
    const id = e.target.dataset.userId;

    if(id){
        requestJson(`${URL_ALL_USERS}/${id}`)
    .then(addUserDetail)
    }
}

function addAllUsers(data){
    const usersTemplate = data.map(user =>{
        return USER_NAME_TEMPLATE
                .replace(`{{name}}`, user.name)
                .replace(`{{id}}`, user.id);
    })
    allUsersList.innerHTML = usersTemplate.join('\n');
    return data;
} 

function addUserDetail(user){
    userDetailForm.reset();

    idInputItem.value = user.id;
    nameInputItem.value = user.name;
    usernameInputItem.value = user.username;
    emailInputItem.value = user.email;
    phoneInputItem.value = user.phone;

    userDetail.classList.remove(INVISIBLE_CLASS);
}

function defaultValue(){
    userDetailForm.reset();
    idInputItem.value = '';
    userDetail.classList.add(INVISIBLE_CLASS);
}



function deleteUser(id){
    return fetch(`${URL_ALL_USERS}/${id}`,{
        method: 'DELETE'  
    })
    .then(() =>{
        deleteItemFromList(id)
        defaultValue()
    })
}

function onDeleteUser(){
    deleteUser(idInputItem.value);
}

function deleteItemFromList(id){
    const el = getUserItem(id);
    el.remove();
}

function getUserItem(id){
    return document.querySelector(`[data-user-id="${id}"]`);
}


function onSaveUser(e){
    e.preventDefault();
    saveUser();
}

function creatNewUser(user){
    delete user.id;

    return fetch(`${URL_ALL_USERS}/`,{
        method: 'POST',
        headers:{
          'Acccept':'aplication/json',
          'Contetn-Type':'aplication/json'
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then((data) =>{
        user.id = data.id;
        addUserToList(user)
    })
}

function saveUser(){
    const user = getFormData();
        creatNewUser(user)
}

function getFormData(){
    return {
        id: idInputItem.value,
        name: nameInputItem.value,
        username: usernameInputItem.value,
        email: emailInputItem.value,
        phone: phoneInputItem.value,
    }
}


function addUserToList(user){
    const el = createUserItem(user)
    allUsersList.append(el);
}


function createUserItem(user) {
    const html = getUserItemHtml(user);

    return htmlToItem(html);
}

function getUserItemHtml(user){
    return USER_NAME_TEMPLATE
        .replace('{{name}}', user.name)
        .replace('{{id}}', user.id);
}

function htmlToItem(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}