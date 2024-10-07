const mongoose = require('mongoose');

const historiaSchema = new mongoose.Schema({
  NumeroHistoria: String,
  Fecha: String
});

module.exports = mongoose.model('Historia', historiaSchema);