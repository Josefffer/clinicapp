const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const usuarioRoutes = require('./routes/usuarioRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const historiaRoutes = require('./routes/historiaRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/pacientes', pacienteRoutes);
app.use('/api/historias', historiaRoutes);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});