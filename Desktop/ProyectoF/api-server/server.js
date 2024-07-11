const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors());

let comments = [
  { id: 1, text: 'Primer comentario' },
  { id: 2, text: 'Segundo comentario' }
];

app.use(bodyParser.json());

// Endpoint para obtener todos los comentarios
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Endpoint para agregar un comentario
app.post('/comments', (req, res) => {
  const newComment = req.body;
  newComment.id = comments.length + 1;
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Endpoint para eliminar un comentario por su ID
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter(comment => comment.id !== parseInt(id));
  res.status(200).json({ message: 'Comentario eliminado correctamente' });
});

app.listen(port, () => {
  console.log(`Servidor API de comentarios iniciado en http://localhost:${port}`);
});



