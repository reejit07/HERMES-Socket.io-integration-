const express = require('express');

const app = express();
const PORT= process.env.PORT || 3000;

const server = require('http').createServer(app);


const io = require('socket.io')(server, {
    cors: { origin: "*"}
});

const members =new Set();

io.on('connection', (socket) => {
    console.log('connection');

   
    socket.on('send-message', (message,room,sender) => {
        
      
        socket.broadcast.to(room).emit('recieve-message', message,room,sender);
        
    });
    
   
    

    socket.on("join-room", (room,username) => {
               console.log(` ${username} connected to ${room}`);
               socket.join(room)
               
             

               if(!members.has(username))
               {
               socket.broadcast.to(room).emit('recieve-message', `${username} joined the room`,room,username);
               members.add(username);
              
               }
               
    });
    
    
    socket.on("reqmembers", room => {
        
        socket.to(room).emit('ansmembers',io.sockets.adapter.rooms.get(room).size)   
});


    socket.on("exit-room", (room,username) => {
        console.log(` ${username} left ${room}`);
        socket.leave(room)
        socket.broadcast.to(room).emit('recieve-message',`${username} left the room`,room,username)
        members.delete(username);
               
    });
   


    socket.on('disconnect', (socket) => {
        console.log('Disconnect');
    });


});

server.listen(PORT, () => {
    console.log('Server is running');
});

