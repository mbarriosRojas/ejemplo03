const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
  marca: String,
  modelo: String,
  año: Number,
  conductor: { type: mongoose.Schema.Types.ObjectId, ref: 'Conductor' }
});

module.exports = mongoose.model('Vehiculo', vehiculoSchema);
