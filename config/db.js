const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bdmedicina', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB', error));