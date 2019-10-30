const express = require('express');
const postagensController = require('../controllers/postagens')
const Postagem = require('../models/postagem');
const router = express.Router();

router.get('/', async (req, res) => {
  const postagens = await postagensController.get();
  res.send(postagens);
});

router.post('/', async(req, res) => {
  await postagensController.create(req.body);
  // enviar para o banco de dados
  // Questão de prova body todo trafego é  puro
  res.send('Adicionado com sucesso');
});

router.put('/:id', async (req,res) => {
  const id = req.params.id;
  await postagensController.update(id, req.body);
  res.send('Update com sucesso.')
});

router.delete('/:id', async (req,res) => {
  const id = req.params.id;
  await postagensController.delete(id);
  res.send('Update com sucesso.');
});

router.get('/:id', async (req,res) => {
  const id = req.params.id;
  await postagensController.getId(id);
  res.send(Postagem);
});

module.exports = router;

// get e delete não tem body