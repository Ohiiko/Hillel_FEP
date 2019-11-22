import $ from 'jquery';

import Collection from "../model/Collection";
import ListView from "../view/List";

export default class Controller{
    constructor(){
        this.collection = new Collection;
        this.listView = new ListView({
            onToggle: this.onTaskClick.bind(this),
            onDelete: this.onTaskDelete.bind(this),
        });
        $('#root').append(this.listView.$el);

        this.collection.fetchServerData()
            .then(() => this.listView.renderTaskList(this.collection.list));
    }

    onTaskClick(id){
        const model = this.collection.list.find((item) => item.id == id);
        
        model.toggle()
                .then(this.listView.renderTaskList(this.collection.list));
    }

    onTaskDelete(id){
        this.collection.delete(id)
                        .then(this.listView.renderTaskList(this.collection.list));
    }
}