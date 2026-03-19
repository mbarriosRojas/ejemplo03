const express = require('express');
const router = express.Router();
const ConductorController = require('../controllers/conductor.controller');

const conductorController = new ConductorController();

router.get('/', conductorController.getAllConductores);
router.post('/', conductorController.createConductor);
router.put('/:id', conductorController.updateConductor);
router.delete('/:id', conductorController.deleteConductor);
router.get('/:id', conductorController.getConductorById);

module.exports = router;
