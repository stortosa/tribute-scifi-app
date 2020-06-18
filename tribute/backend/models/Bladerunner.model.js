const mogoose = require('mongoose');

// si se borra el crear id puede que funcione el EDIT ???
// con este esquema metemos a Ford y a Gosling
const bladeRunnerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  age: { type: String, required: true },
  adress: { type: String, required: true },
  category: { type: String, required: true },
  replicantsRemoved: { type: String, required: true },
  guns: { type: String, required: true },
  dateReplicantRemoved: { type: String, required: true },
  animals: { type: String, required: true },
  idiosyncrasy: { type: String, required: true }
})

module.exports = mongoose.model('Bladerunner', bladeRunnerSchema);