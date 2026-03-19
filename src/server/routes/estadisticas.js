const express = require('express');
const { getEstadisticas, getEstadisticasPorPeriodo } = require('../controllers/estadisticas.controller');

const router = express.Router();

router.get('/estadisticas', getEstadisticas);
router.get('/estadisticas/por-periodo', getEstadisticasPorPeriodo);

module.exports = router;
