const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rockRouter = require('./routes/rockRouter');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/rockBD', { 
})
.then(() => console.log('Conexión a MongoDB exitosa'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/rock', rockRouter);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
