// Importamos el express router
const express = require('express');
const router = express.Router();

// Importamos el controlador de clientes
const clienteController = require('../controllers/cliente.controller');

// Ruta para obtener todos los clientes
router.get('/', clienteController.obtenerClientes);

// Ruta para crear un nuevo cliente
router.post('/', clienteController.crearCliente);

// Ruta para obtener un cliente por ID
router.get('/:id', clienteController.obtenerClientePorId);

// Ruta para actualizar un cliente
router.put('/:id', clienteController.actualizarCliente);

// Ruta para eliminar un cliente
router.delete('/:id', clienteController.eliminarCliente);

// Exportamos la ruta de clientes
module.exports = router;
