const UsuarioModel = require('../model/usuario-model')
class UsuarioService{
    logar(usuario){
        try{
            return UsuarioModel.findOne({email:usuario.email})
        }

        catch(error){
            console.log(error);
        }
    }

    criar(usuario){
        try{
            return UsuarioModel.create(usuario)
        }
        catch(error){
            console.log(error);
        }
    }

    findAll(){
        try{
            return UsuarioModel.find({})
        }
        catch(error){
            console.log(error);
        }
    }

}

module.exports = new UsuarioService();