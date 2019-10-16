"use strict" 

const urlAllUsers = `https://jsonplaceholder.typicode.com/users`;
const allUsersList = document.getElementById('allUsersList');
const userDetail = document.getElementById('userDetail');
const userNameTemplate = document.getElementById('userNameTemplate').innerHTML;
const userDetailTemplate = document.getElementById('userDetailTemplate').innerHTML;

allUsersList.addEventListener('click', onUserDetail);


requestJson(urlAllUsers)
    .then(addAllUsers)
    .then(data =>{
        return requestJson(`${urlAllUsers}/${data[0].id}`);
    })
    .then(addUserDetail)

function requestJson(url){
    return fetch(url)
            .then(resp => resp.json())
            .catch(error => console.warn(error));
}

function onUserDetail(e){
    const id = e.target.dataset.userId;

    if(id){
        fetch(`${urlAllUsers}/${id}`)
    .then(resp => resp.json())
    .then(addUserDetail)
    }
}

function addAllUsers(data){
    const usersTemplate = data.map(user =>{
        return userNameTemplate
                .replace(`{{name}}`, user.name)
                .replace(`{{id}}`, user.id);
    })
    allUsersList.innerHTML = usersTemplate.join('\n');
    return data;
} 

function addUserDetail(user){
    userDetail.innerHTML = userDetailTemplate
                .replace(`{{name}}`, user.name)
                .replace(`{{username}}`, user.username)
                .replace(`{{phone}}`, user.phone)
                .replace(`{{website}}`, user.website)
                .replace(`{{email}}`, user.email)
                .replace(`{{address.street}}`, user.address.street)
                .replace(`{{address.suite}}`, user.address.suite)
                .replace(`{{address.city}}`, user.address.city)
                .replace(`{{address.zipcode}}`, user.address.zipcode)
                .replace(`{{address.geo.lat}}`, user.address.geo.lat)
                .replace(`{{address.geo.LNG}}`, user.address.geo.lng)
                .replace(`{{company.bs}}`, user.company.bs)
                .replace(`{{company.catchPhrase}}`, user.company.catchPhrase)
                .replace(`{{company.name}}`, user.company.name)    
}