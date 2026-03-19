// Controlador para gestionar los clientes
const Cliente = require('../models/cliente');

// Obtener todos los clientes
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los clientes' });
  }
};

// Obtener un cliente por ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      res.status(404).json({ message: 'Cliente no encontrado' });
    } else {
      res.json(cliente);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el cliente' });
  }
};

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el cliente' });
  }
};

// Actualizar un cliente
exports.updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cliente) {
      res.status(404).json({ message: 'Cliente no encontrado' });
    } else {
      res.json(cliente);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el cliente' });
  }
};

// Eliminar un cliente
exports.deleteCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({ message: 'Cliente eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el cliente' });
  }
};
