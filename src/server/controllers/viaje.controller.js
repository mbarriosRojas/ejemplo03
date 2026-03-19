const { Viaje } = require('../models/viaje');
const { Estadistica } = require('../models/estadistica');

const getViajes = async (req, res) => {
  try {
    const viajes = await Viaje.find();
    res.json(viajes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener viajes' });
  }
};

const calcularEstadisticas = async (viajes) => {
  try {
    const estadisticas = [];
    viajes.forEach((viaje) => {
      const fecha = viaje.fecha;
      const ingresos = viaje.ingresos;
      const viajeCount = viaje.viajes;
      const estadistica = new Estadistica({ fecha, ingresos, viajes: viajeCount });
      estadisticas.push(estadistica);
    });
    return estadisticas;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getViajes,
  calcularEstadisticas,
};
