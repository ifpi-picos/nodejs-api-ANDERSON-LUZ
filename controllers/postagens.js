const PostagemModel = require('../models/postagem');

class Postagens { 

  async get () { 
    const postagens = await PostagemModel.find({});
    return postagens;
  }

  async create (postagemDTO) {
    await new postagemModel(postagemDTO).save(); 
  }

}

module.exports = new Postagens();