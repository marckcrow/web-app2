const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(cors());

// Configuração do banco de dados
mongoose.connect('mongodb://localhost:27017/nomeDoBanco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rotas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
