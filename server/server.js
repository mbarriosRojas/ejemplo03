// Agregar la ruta para los clientes
const express = require('express');
const app = express();
const clienteRoute = require('./routes/clientes');

app.use('/clientes', clienteRoute);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
