const { v4: uuidv4 } = require('uuid');

module.exports = function(server) {

    const io = require('socket.io')(server, {
        transports: ['websocket']
    });

    var rooms = [];
    var socketRooms = new Map();

    io.on('connection', (socket) => {

        console.log('A user connected:', socket.id);

        if(rooms.length > 0) {
            var roomId = rooms.shift();
            socket.join(roomId);
            socket.emit('joinRoom', );
        }

    });
}