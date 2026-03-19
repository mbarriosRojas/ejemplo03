const express = require('express');
const app = express();
const viajesRouter = require('./routes/viajes');
const viajeController = require('./controllers/viaje.controller');

app.use('/viajes', viajesRouter);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
