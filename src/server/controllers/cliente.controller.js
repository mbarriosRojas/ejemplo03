// Importamos el modelo de cliente
const Cliente = require('../models/cliente');

// Función para obtener todos los clientes
async function obtenerClientes(req, res) {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los clientes' });
  }
}

// Función para crear un nuevo cliente
async function crearCliente(req, res) {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el cliente' });
  }
}

// Función para obtener un cliente por ID
async function obtenerClientePorId(req, res) {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el cliente' });
  }
}

// Función para actualizar un cliente
async function actualizarCliente(req, res) {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el cliente' });
  }
}

// Función para eliminar un cliente
async function eliminarCliente(req, res) {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Cliente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el cliente' });
  }
}

// Exportamos las funciones del controlador
module.exports = {
  obtenerClientes,
  crearCliente,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
};
