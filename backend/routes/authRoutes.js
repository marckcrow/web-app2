const express = require('express');
const router = express.Router();

// Rota de login (exemplo)
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Aqui você faria a lógica de autenticação e validação
  res.json({ message: 'Usuário logado com sucesso' });
});

module.exports = router;
