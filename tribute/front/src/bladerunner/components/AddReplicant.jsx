import React, { useState } from 'react';
import Error from '../../components/Error';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function AddReplicant({ history, saveReloadReplicant }) {

  // states:
  const [name, saveName] = useState('');
  const [gender, saveGender] = useState('');
  const [age, saveAge] = useState('');
  const [inceptDate, saveInceptDate] = useState('');
  const [model, saveModel] = useState('');
  const [functionality, saveFunctionality] = useState('');
  const [physicalLevel, savePhysicalLevel] = useState('');
  const [mentalLevel, saveMentalLevel] = useState('');
  const [origin, saveOrigin] = useState('');
  const [destinyPlanet, saveDestinyPlanet] = useState('');
  const [retired, saveRetired] = useState('');
  const [idiosyncrasy, saveIdiosyncrasy] = useState('');

  const [error, saveError] = useState(false);

  const addReplicant = async e => {
    e.preventDefault();
    if (name === '' || gender === '' || age === '' || inceptDate === '' || model === '' || functionality === '' || physicalLevel === '' || mentalLevel === '' || origin === '' || destinyPlanet === '' || retired === '' || idiosyncrasy === '') {
      saveError(true);
      return;
    }
    saveError(false)

    //create a new Replicant:
    try {
      const result = await axios.post('http://localhost:4000/replicants', {
        name: name,
        gender: gender,
        age: age,
        inceptDate: inceptDate,
        model: model,
        functionality: functionality,
        physicalLevel: physicalLevel,
        mentalLevel: mentalLevel,
        origin: origin,
        destinyPlanet: destinyPlanet,
        retired: retired,
        idiosyncrasy: idiosyncrasy
      });
      console.log(result);
      if (result.status === 201) {
        Swal.fire(
          'Good job!',
          'Replicant was created successfuly',
          'Ready'
        )
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
    // user redirect to replicant added:
    saveReloadReplicant(true);
    history.push('/replicants')
  }

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="text-center">Add a new Replicant</h1>

      {error ? <Error message="All fields are mandatory" /> : null}

      <form className="mt-5" onSubmit={addReplicant}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="name"
            onChange={e => saveName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            placeholder="gender"
            onChange={e => saveGender(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            placeholder="age"
            onChange={e => saveAge(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>InceptDate</label>
          <input
            type="text"
            className="form-control"
            name="inceptDate"
            placeholder="inceptDate"
            onChange={e => saveInceptDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            className="form-control"
            name="modelo"
            placeholder="model"
            onChange={e => saveModel(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Replicants Functionality</label>
          <input
            type="text"
            className="form-control"
            name="functionality"
            placeholder="functionality"
            onChange={e => saveFunctionality(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Physical Level</label>
          <input
            type="text"
            className="form-control"
            name="physicalLevel"
            placeholder="physicalLevel"
            onChange={e => savePhysicalLevel(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mental Level</label>
          <input
            type="text"
            className="form-control"
            name="mentalLevel"
            placeholder="mentalLevel"
            onChange={e => saveMentalLevel(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Origin</label>
          <input
            type="text"
            className="form-control"
            name="origin"
            placeholder="origin"
            onChange={e => saveOrigin(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>DestinyP lanet</label>
          <input
            type="text"
            className="form-control"
            name="destinyPlanet"
            placeholder="destinyPlanet"
            onChange={e => saveDestinyPlanet(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Retired</label>
          <input
            type="text"
            className="form-control"
            name="retired"
            placeholder="retired"
            onChange={e => saveRetired(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Idiosyncrasy</label>
          <input
            type="text"
            className="form-control"
            name="idiosyncrasy"
            placeholder="idiosyncrasy"
            onChange={e => saveIdiosyncrasy(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Add Replicant"
        />
      </form>
    </div>
  )
}
export default withRouter(AddReplicant);