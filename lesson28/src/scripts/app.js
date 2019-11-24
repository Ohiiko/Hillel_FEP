import Chat from "./Chats";
import $ from 'jquery';


const talk= new Chat({
    onMessage: addLog,
})

const $log = $('#log');
const $input = $('#message');
const name = 'Pavel';

$('#sendBtn').on('click', sendMessage);

function addLog(message) {
    $log.append(
        `<div class="${message.type}">${message.name}: ${message.message}</div>`
    );
}

function sendMessage() {
    const message = $input.val();
    talk.message(name, message )
}

talk.onopen(name);