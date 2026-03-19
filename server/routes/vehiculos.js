const express = require('express');
const router = express.Router();
const Vehiculo = require('../models/vehiculo');

router.get('/', async (req, res) => {
  const vehiculos = await Vehiculo.find().populate('conductor');
  res.json(vehiculos);
});

router.post('/', async (req, res) => {
  const vehiculo = new Vehiculo(req.body);
  await vehiculo.save();
  res.json(vehiculo);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const vehiculo = await Vehiculo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(vehiculo);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Vehiculo.findByIdAndDelete(id);
  res.json({ message: 'Vehículo eliminado' });
});

module.exports = router;
