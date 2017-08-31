module.exports = function(app){
    app.get('/chat',function(req, res){
         app.app.controllers.chat.iniciaChat(app,req, res);
    });
}
module.exports = function(app){
    app.post('/chat',function(req, res){
         app.app.controllers.chat.iniciaChat(app,req, res);
    });
}