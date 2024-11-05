const express = require('express');
const router = express.Router();

// Rota para listar usuários
router.get('/', (req, res) => {
  res.json([{ name: 'Usuário Exemplo', email: 'exemplo@email.com' }]);
});

module.exports = router;
