const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

const frontendPath = path.join(__dirname, '..', 'frontend');
app.use(express.static(frontendPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// rota de teste (a substituir pela API real mais tarde)
app.get('/alunos', (req, res) => {
  res.json([{ nome: 'Ana', apelido: 'Silva', idCurso: 1, anoCurricular: 2 }]);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));