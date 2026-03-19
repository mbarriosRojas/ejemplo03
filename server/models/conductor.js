const mongoose = require('mongoose');

const conductorSchema = new mongoose.Schema({
  nombre: String,
  // Agregar otros campos necesarios para el conductor
});

const Conductor = mongoose.model('Conductor', conductorSchema);

module.exports = Conductor;
