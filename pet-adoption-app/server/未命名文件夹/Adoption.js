const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  petName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Adoption = mongoose.model('Adoption', adoptionSchema);

module.exports = Adoption;
