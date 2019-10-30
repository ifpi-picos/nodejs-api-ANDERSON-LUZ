const PostagemModel = require('../models/postagem');

class Postagens { 

  async get () { 
    const postagens = await PostagemModel.find({});
    return postagens;
  }

  async create (postagemDTO) {
    await new PostagemModel(postagemDTO).save(); 
  }

  async update (id) {
    await  PostagemModel.updateOne({_id: id}, postagemDTO); 
  }

  async delete (id) {
    await PostagemModel.deleteOne({_id: id});
  }

  async getId (id) { 
    const Postagem = await PostagemModel.find({_id: id});
    return Postagem;
  }

}

module.exports = new Postagens();