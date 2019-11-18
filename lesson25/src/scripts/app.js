import $ from 'jquery';

import "../styles/normalize.css";
import "../styles/skeleton.css";
import "../styles/style.css";

import TodoList from "./TodoList";

$(() => {
    new TodoList(
        $('#taskList'),
        $('#addTaskForm'),
        $('#taskItemTemplate').html()
    )
});