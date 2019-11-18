'use strict';

import $ from 'jquery';
import {saveState, getState} from "./localStorage";

export default class Todolist {
    constructor($list, $form, template) {
        this.$list = $list;
        this.$form = $form;
        this.template = template;
        this.tasks = [];

        this.init();
    }

    init(){
        this.addEventListeners();
        this.restoreData();
        this.renderAllTask();

    }

    addEventListeners(){
        this.$form.on('submit', this.onAddTaskSubmit.bind(this));
        this.$list.on('click', '.delete-btn', this.onDeleteTask.bind(this));
        this.$list.on('click', '.task-item', this.onItemClick.bind(this));
    }

    onAddTaskSubmit(e){
        e.preventDefault();
        const newTask = {};

        this.$form.serializeArray().forEach(({name, value})=>{
            newTask[name] = value;
        });

        this.creatNewTask(newTask);

        this.resetForm();
    }

    onDeleteTask(e){
        const id = $(e.target).closest('.task-item').data('todoId');
        this.deleteTask(id);
    }

    onItemClick(e){
        const id = $(e.target).data('todoId');
        this.toggleTask(id);
    }

    creatNewTask(task){
       task.id = Date.now();
       task.isDone = false;

       this.tasks.push(task);
       this.renderTaskList(task);
       this.saveData();
    }

    renderTaskList(task){
        const $task = $(this.template.replace('{{title}}', task.title)
                                    .replace('{{id}}', task.id));
        
        if(task.isDone){
            $task.addClass('done')
        }

        this.$list.append($task);

    }
    
    resetForm(){
        this.$form[0].reset();
    }
    
    renderAllTask(){
        this.$list.empty();
        this.tasks.forEach((task) => this.renderTaskList(task));
    }

    deleteTask(id){
        this.tasks = this.tasks.filter((task)=> task.id !==id);

        this.saveData();
        this.renderAllTask();
    }

    toggleTask(id){
        const task = this.tasks.find((task) => task.id === id);
        task.isDone = !task.isDone;

        this.saveData();
        this.renderAllTask();
    }
    
    saveData(){
        saveState(this.tasks);
    }

    restoreData(){
        this.tasks = getState();
    }
}

