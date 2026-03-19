const ConductorService = require('../services/conductor.service');

class ConductorController {
  constructor() {
    this.conductorService = new ConductorService();
  }

  async getAllConductores(req, res) {
    try {
      const conductores = await this.conductorService.getAllConductores();
      res.json(conductores);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener conductores' });
    }
  }

  async createConductor(req, res) {
    try {
      const conductor = await this.conductorService.createConductor(req.body);
      res.json(conductor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear conductor' });
    }
  }

  async updateConductor(req, res) {
    try {
      const id = req.params.id;
      const conductor = await this.conductorService.updateConductor(id, req.body);
      res.json(conductor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar conductor' });
    }
  }

  async deleteConductor(req, res) {
    try {
      const id = req.params.id;
      await this.conductorService.deleteConductor(id);
      res.json({ message: 'Conductor eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar conductor' });
    }
  }

  async getConductorById(req, res) {
    try {
      const id = req.params.id;
      const conductor = await this.conductorService.getConductorById(id);
      res.json(conductor);
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: 'Conductor no encontrado' });
    }
  }
}

module.exports = ConductorController;
