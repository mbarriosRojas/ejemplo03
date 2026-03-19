const express = require('express');
const router = express.Router();
const Viaje = require('../models/viaje');

router.get('/', async (req, res) => {
  try {
    const viajes = await Viaje.find().populate('conductor vehiculo');
    res.json(viajes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los viajes' });
  }
});

module.exports = router;
