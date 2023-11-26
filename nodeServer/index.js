const { Server } = require("socket.io");

const io = new Server(8000);

const user = {};
io.on("connection", (socket) => {
    socket.on('new-user-joined', name => { //socket event find name 
        console.log('new-user-joined', name);
        user[socket.id] = name;
        socket.broadcast.emit('user-joined', name)
    });

    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: user[socket,id]})
    });
});

io.listen(3000);

