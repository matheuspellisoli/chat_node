// importa as configs do servidor
var app = require('./config/server');

const port = process.env.PORT || 3000;

var server = app.listen(port, function(){
    console.log('Servidor online');
});

var io = require('socket.io').listen(server);

app.set('io',io);
io.on('connection',function(socket){
    console.log('user conectou');

    socket.on('disconnect',function(){
        console.log('user desconectou');

    });

socket.on('msgParaServidor',function(data){
    socket.emit('msgParaCliente',
    {apilido : data.apilido, mensagem: data.mensagem });

    socket.broadcast.emit('msgParaCliente',
    {apilido : data.apilido, mensagem: data.mensagem });
    
    if(parseInt(data.apilido_atualizado) == 0){
    socket.emit('participanteParaCliente',
    {apilido : data.apilido});
    
    socket.broadcast.emit('participanteParaCliente',
    {apilido : data.apilido});

    }

    
 });   
  
});

