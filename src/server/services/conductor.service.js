const Conductor = require('../models/conductor');

class ConductorService {
  async getAllConductores() {
    return await Conductor.find().exec();
  }

  async createConductor(data) {
    const conductor = new Conductor(data);
    return await conductor.save();
  }

  async updateConductor(id, data) {
    return await Conductor.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteConductor(id) {
    return await Conductor.findByIdAndRemove(id);
  }

  async getConductorById(id) {
    return await Conductor.findById(id).exec();
  }
}

module.exports = ConductorService;
