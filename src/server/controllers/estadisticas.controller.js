const { Estadistica } = require('../models/estadistica');

const getEstadisticas = async (req, res) => {
  try {
    const estadisticas = await Estadistica.find();
    res.json(estadisticas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener estadísticas' });
  }
};

const getEstadisticasPorPeriodo = async (req, res) => {
  try {
    const { inicio, fin } = req.query;
    const estadisticas = await Estadistica.find({ fecha: { $gte: inicio, $lte: fin } });
    res.json(estadisticas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener estadísticas por período' });
  }
};

module.exports = {
  getEstadisticas,
  getEstadisticasPorPeriodo,
};
