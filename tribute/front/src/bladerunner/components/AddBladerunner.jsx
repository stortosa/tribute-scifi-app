import React, { useState } from 'react';
import Error from '../../components/Error';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function AddBladerunner({ history, saveReloadBladerunner }) {

  // states:
  const [name, saveName] = useState('');
  const [age, saveAge] = useState('');
  const [adress, saveAdress] = useState('');
  const [category, saveCategory] = useState('');
  const [replicants, saveReplicants] = useState('');
  const [weapons, saveWeapons] = useState('');
  const [date, saveDate] = useState('');
  const [animals, saveAnimals] = useState('');
  const [idiosyncrasy, saveIdiosyncrasy] = useState('');

  const [error, saveError] = useState(false);

  const addBladerunner = async e => {
    e.preventDefault();
    if (name === '' || age === '' || adress === '' || category === '' || replicants === '' || weapons === '' || date === '' || animals === '' || idiosyncrasy === '') {
      saveError(true);
      return;
    }
    saveError(false)

    //create a new Blade Runner:
    try {
      const result = await axios.post('http://localhost:4000/bladerunner/bladerunner', {
        name: name,
        age: age,
        adress: adress,
        category: category,
        replicants: replicants,
        weapons: weapons,
        date: date,
        animals: animals,
        idiosyncrasy: idiosyncrasy
      });
      console.log(result);
      if (result.status === 201) {
        Swal.fire(
          'Good job!',
          'Blade Runner was created successfuly',
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
    // user redirect to blade runners added:
    saveReloadBladerunner(true);
    history.push('/bladerunner/bladerunner')
  }

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="text-center">Add new Goal</h1>

      {error ? <Error message="All fields are mandatory" /> : null}

      <form className="mt-5" onSubmit={addBladerunner}>
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
          <label>Adress</label>
          <input
            type="text"
            className="form-control"
            name="adress"
            placeholder="adress"
            onChange={e => saveAdress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            placeholder="category"
            onChange={e => saveCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Replicants Retired</label>
          <input
            type="text"
            className="form-control"
            name="replicants"
            placeholder="replicants"
            onChange={e => saveReplicants(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Weapons</label>
          <input
            type="text"
            className="form-control"
            name="weapons"
            placeholder="Weapons"
            onChange={e => saveWeapons(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Date Replicant Retired</label>
          <input
            type="text"
            className="form-control"
            name="date"
            placeholder="date retired"
            onChange={e => saveDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Animals</label>
          <input
            type="text"
            className="form-control"
            name="animals"
            placeholder="animals"
            onChange={e => saveAnimals(e.target.value)}
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
          value="Add Blade Runner"
        />
      </form>
    </div>
  )
}
export default withRouter(AddBladerunner);