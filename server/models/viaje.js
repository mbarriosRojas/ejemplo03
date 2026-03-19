const mongoose = require('mongoose');

const viajeSchema = new mongoose.Schema({
  conductor: { type: mongoose.Schema.Types.ObjectId, ref: 'Conductor' },
  vehiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculo' },
  estado: { type: String, enum: ['pendiente', 'en curso', 'completado', 'cancelado'] }
});

module.exports = mongoose.model('Viaje', viajeSchema);
