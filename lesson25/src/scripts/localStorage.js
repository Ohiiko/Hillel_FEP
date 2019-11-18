export function saveState(data){
    localStorage.setItem('tasks', JSON.stringify(data));
}

export function getState(){
    return JSON.parse(localStorage.getItem('tasks')) || [];
}