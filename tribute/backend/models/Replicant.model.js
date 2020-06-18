const mogoose = require('mongoose');

// introducir los datos de los replicantes de las peliculas:

const replicantSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  age: { type: String, required: true },
  date: { type: String, required: true },     // cuando fue hecho
  origin: { type: String, required: true },
  destinyPlanet: { type: String, required: true },
  category: { type: String, required: true },
  replicantsRemoved: { type: String, required: true },
  idiosyncrasy: { type: String, required: true }
})

module.exports = mongoose.model('Replicant', replicantSchema);