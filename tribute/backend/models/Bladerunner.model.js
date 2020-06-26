const mongoose = require('mongoose');

// con este esquema metemos a Ford y a Gosling
const bladeRunnerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  age: { type: String, required: true },
  adress: { type: String, required: true },
  category: { type: String, required: true },
  replicantsRemoved: { type: String, required: true },
  weapons: { type: String },
  dateReplicantRemoved: { type: String },
  animals: { type: String },
  idiosyncrasy: { type: String }
})

module.exports = mongoose.model('Bladerunner', bladeRunnerSchema);