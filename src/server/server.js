// Importamos express
const express = require('express');
const app = express();

// Importamos la ruta de clientes
const clientesRouter = require('./routes/clientes');

// Configuramos la ruta de clientes
app.use('/api/clientes', clientesRouter);

// Exportamos la aplicación
module.exports = app;
