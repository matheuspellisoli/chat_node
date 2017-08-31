module.exports.iniciaChat = function(app, req, res){
    var dadosForm = req.body;

    req.assert('apilido',"Nome ou apilido é obrigatorio'").notEmpty();
     req.assert('apilido',"Nome ou apilido deve conter entre 3 e 15 caracteres'").len(3,15);
    
    var errors = req.validationErrors();


    if(errors){
        res.render("index",{validacao : errors});
        return;
    }

    app.get('io').emit('msgParaCliente',
    {apilido : dadosForm.apilido, mensagem: 'acobou de entrar no chat' });
    res.render('chat',{dadosForm : dadosForm});
}
