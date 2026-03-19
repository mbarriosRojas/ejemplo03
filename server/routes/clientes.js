// Ruta para acceder a los clientes
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

// Obtener todos los clientes
router.get('/', clienteController.getAllClientes);

// Obtener un cliente por ID
router.get('/:id', clienteController.getClienteById);

// Crear un nuevo cliente
router.post('/', clienteController.createCliente);

// Actualizar un cliente
router.put('/:id', clienteController.updateCliente);

// Eliminar un cliente
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
