const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
  Nombre: String,
    Cedula: String,
    FechaNacimiento: String,
    Sexo: String,
    Telefono: String,
    Correo: String,
    Direccion: String
});

module.exports = mongoose.model('Paciente', pacienteSchema);