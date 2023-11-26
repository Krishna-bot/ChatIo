const socket = ('http://localhost:8000');
const form = document.getElementById('send-container');
const msgInp = document.getElementById('messageInp');
const msgContainer = document.querySelector('.container');


const append = (message, pos) =>{
    const msgEle = document.createElement('div');
    msgEle.innerText = message;
    msgEle.classList.add('message');
    msgEle.classList.add(pos);
    msgContainer.append(msgEle);
}

form.addEventListener('submit', (e) =>{
e.preventDefault();
const message = msgInp.value;
append(`you : ${message}`, 'right');
socket.emit('send', message);
msgInp.value = '';
})

const name = prompt("Enter your name");
//socket.emit('new-user-joined', name);

socket.on('user-joined', name => {
append(`${name} joined the Chat`, 'right')
})

socket.on('receive', data => {
    append(`${data.name} : ${data.message}`, 'left')
    })