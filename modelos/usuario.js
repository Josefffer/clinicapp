const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  Nombre: String,
  Usuario: String,
  Contrasena: String,
  Cedula: String,
  Cargo: String,
  Telefono: String
  });

module.exports = mongoose.model('Usuario', usuarioSchema);