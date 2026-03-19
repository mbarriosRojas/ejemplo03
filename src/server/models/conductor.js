const mongoose = require('mongoose');

const conductorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  activo: {
    type: Boolean,
    default: true,
  },
});

const Conductor = mongoose.model('Conductor', conductorSchema);

module.exports = Conductor;
