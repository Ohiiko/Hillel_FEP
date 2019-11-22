import config from "../config";

export default class Model{
    constructor(data){
        Object.assign(this, data);
    }

    update(data){
        Object.assign(this, data);

        return this.save()
    }

    save(){
        return this.id ? this.saveUpdate() : this.saveCreate();
    }

    saveUpdate(){
        return fetch(config.contactsUrl+`/${this.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        });
    }

    delete() {
        return fetch(`${this.url}`, {
            method: "DELETE",
        })
    }

    toggle(){
        this.completed = !this.completed;

        this.save();
        return Promise.resolve();
    }
}