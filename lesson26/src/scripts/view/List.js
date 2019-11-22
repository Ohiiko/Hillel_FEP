import $ from 'jquery';

export default class List {
    constructor(config){
        this.config = config;

        this.$el = this.createElement();

        this.$el.on('click', '.task-item', this.onTaskClick.bind(this))
        this.$el.on('click', '.delete-btn', this.onDeleteBtnClick.bind(this))
    }

    onTaskClick(e){
        const id = $(e.target).data('id');
        this.config.onToggle(id);
    }

    onDeleteBtnClick(e) {
        e.stopPropagation();
        const id = $(e.target).closest('.task-item').data('id');
        this.config.onDelete(id);
    }

    createElement() {
        return $(`<div id="taskList" class="task-list u-full-width"></div>`);
    }

    renderTaskList(data){
        this.$el.empty();
        data.forEach(item => this.renderTask(item));
    }

    renderTask({id, title, completed}){
        this.$el.append(`<div class="task-item ${completed ? 'done' : ''}" data-id="${id}">${title}<span class="delete-btn">✘</span></div>`)
    }
}