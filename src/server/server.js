const express = require('express');
const app = express();
const conductoresRouter = require('./routes/conductores');
const ConductorController = require('./controllers/conductor.controller');

app.use(express.json());
app.use('/api/conductores', conductoresRouter);

const conductorController = new ConductorController();

app.get('/api/conductores', conductorController.getAllConductores);
app.post('/api/conductores', conductorController.createConductor);
app.put('/api/conductores/:id', conductorController.updateConductor);
app.delete('/api/conductores/:id', conductorController.deleteConductor);
app.get('/api/conductores/:id', conductorController.getConductorById);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
