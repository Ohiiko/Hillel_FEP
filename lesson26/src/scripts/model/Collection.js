import config from "../config";
import Model from "./Model";

export default class Collection{
    constructor(){
        this.list = [];
        this.setData = this.setData.bind(this)
    }

    fetchServerData(){
        return fetch(config.contactsUrl)
            .then(resp => resp.json())
            .then(this.setData)
    }

    setData(data){
        this.list = data.map((item) => new Model(item));
    }

    get(id){
        return this.list.find(el => el.id == id);
    }

    delete(id){
        const model = this.get(id);
        model.delete()
        this.list = this.list.filter(item => item != model);
        return Promise.resolve();
    }
}