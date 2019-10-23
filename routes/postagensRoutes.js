const express = require('express');
const postagensController = require('../controllers/postagens')
const router = express.Router();

router.get('/', async (req, res) => {
  const postagens = await postagensController.get();
  res.send(postagens);
});

router.post('/', async(req, res) => {
  await postagensController.create(req.body);
  // enviar para o banco de dados
  // Questão de prova body todo trafego é texto puro
  res.send('Adicionado com sucesso');
});

module.exports = router;