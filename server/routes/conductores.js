const express = require('express');
const router = express.Router();
const Conductor = require('../models/conductor');

router.get('/', async (req, res) => {
  try {
    const conductores = await Conductor.find();
    res.json(conductores);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener conductores' });
  }
});

module.exports = router;
