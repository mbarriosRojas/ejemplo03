const express = require('express');
const router = express.Router();
const Conductor = require('../models/conductor');

router.get('/', async (req, res) => {
  const conductores = await Conductor.find().populate('vehiculo');
  res.json(conductores);
});

router.post('/', async (req, res) => {
  const conductor = new Conductor(req.body);
  await conductor.save();
  res.json(conductor);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const conductor = await Conductor.findByIdAndUpdate(id, req.body, { new: true });
  res.json(conductor);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Conductor.findByIdAndDelete(id);
  res.json({ message: 'Conductor eliminado' });
});

router.put('/:id/asignar-vehiculo', async (req, res) => {
  const id = req.params.id;
  const vehiculoId = req.body.vehiculoId;
  const conductor = await Conductor.findByIdAndUpdate(id, { vehiculo: vehiculoId }, { new: true });
  res.json(conductor);
});
