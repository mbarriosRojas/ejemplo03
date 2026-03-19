const mongoose = require('mongoose');

const estadisticaSchema = new mongoose.Schema({
  fecha: Date,
  ingresos: Number,
  viajes: Number,
});

const Estadistica = mongoose.model('Estadistica', estadisticaSchema);

module.exports = { Estadistica };
