const mongoose = require('mongoose');

// introducir los datos de los replicantes de las peliculas:

const replicantSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: String, required: true },
  inceptDate: { type: String, required: true },
  modelo: { type: String },
  functionality: { type: String, required: true },
  physicalLevel: { type: String, required: true },
  mentalLevel: { type: String, required: true },
  origin: { type: String, required: true },
  destinyPlanet: { type: String, required: true },
  retired: { type: Boolean },
  idiosyncrasy: { type: String }
})

module.exports = mongoose.model('Replicant', replicantSchema);