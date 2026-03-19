// Importamos mongoose para la conexión a la base de datos MongoDB
const mongoose = require('mongoose');

// Creamos el esquema para el modelo de cliente
const clienteSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  email: String,
  telefono: String,
});

// Creamos el modelo de cliente
const Cliente = mongoose.model('Cliente', clienteSchema);

// Exportamos el modelo de cliente
module.exports = Cliente;
