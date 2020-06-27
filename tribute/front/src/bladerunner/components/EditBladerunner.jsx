import React, { useState, useRef } from 'react';
import Error from '../../components/Error';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function EditBladerunner(props) {
  const { history, oneBladerunner, saveReloadBladerunner } = props;

  console.log(oneBladerunner);

  //generate Refs:
  const nameBladeRef = useRef('');
  const ageBladeRef = useRef('');
  const adressBladeRef = useRef('');
  const categoryBladeRef = useRef('');
  const replicantsBladeRef = useRef('');
  const weaponsBladeRef = useRef('');
  const dateBladeRef = useRef('');
  const animalsBladeRef = useRef('');
  const idiosyncrasyBladeRef = useRef('');

  const [error, saveError] = useState(false);
  const [stateEdit, saveStateEdit] = useState('');

  const editBladerunner = async (e) => {

    e.preventDefault();
    //catch form´s values

    // validation
    const newName = nameBladeRef.current.value,
      newAge = ageBladeRef.current.value,
      newAdress = adressBladeRef.current.value,
      newCategory = categoryBladeRef.current.value,
      newReplicants = replicantsBladeRef.current.value,
      newWeapons = weaponsBladeRef.current.value,
      newDate = dateBladeRef.current.value,
      newAnimals = animalsBladeRef.current.value,
      newIdiosyncrasy = idiosyncrasyBladeRef.current.value;

    if (newName === '' || newAge === '' || newAdress === '' || newCategory === '' || newReplicants === '' || newWeapons === '' || newDate === '' || newAnimals === '' || newIdiosyncrasy === '') {
      saveError(true);
      return;
    }

    saveError(false);

    // Values from Form
    const editingBladerunner = {
      name: newName,
      age: newAge,
      adress: newAdress,
      category: newCategory,
      replicants: newReplicants,
      weapons: newWeapons,
      date: newDate,
      animals: newAnimals,
      idiosyncrasy: newIdiosyncrasy
  }
    console.log(editingBladerunner);

    // send request 
    const url = `http://localhost:4000/bladerunner/${oneBladerunner._id}`;

    try {

      const result = await axios.put(url, editingBladerunner);

      console.log(result);
      if (result.status === 200) {
        Swal.fire(
          'Good job!',
          'The was edited successfuly!',
          'success'
        )
      }
    } catch{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
    // user redirect to goals added:
    saveReloadBladerunner(true);
    history.push('/bladerunner')
  }

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="text-center">Edit a Goal</h1>

      {error ? <Error message="All fields are mandatory" /> : null}

      <form className="mt-5" onSubmit={editBladerunner}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            ref={nameBladeRef}
          // defaultValue={}
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            placeholder="Age"
            ref={ageBladeRef}
          // defaultValue={oneGoal.color}

          />
        </div>

        <div className="form-group">
          <label>Adress</label>
          <input
            type="text"
            className="form-control"
            name="adress"
            placeholder="adress"
            ref={adressBladeRef}
          // defaultValue={}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            placeholder="category"
            ref={categoryBladeRef}
          />
        </div>

        <div className="form-group">
          <label>Replicants</label>
          <input
            type="text"
            className="form-control"
            name="replicatns"
            placeholder="replicants"
            ref={replicantsBladeRef}
          />
        </div>

        <div className="form-group">
          <label>Weapons</label>
          <input
            type="text"
            className="form-control"
            name="weapon"
            placeholder="weapon"
            ref={weaponsBladeRef}
          />
        </div>

        <div className="form-group">
          <label>Date REtired</label>
          <input
            type="text"
            className="form-control"
            name="date"
            placeholder="date"
            ref={dateBladeRef}
          />
        </div>

        <div className="form-group">
          <label>Animals</label>
          <input
            type="text"
            className="form-control"
            name="animals"
            placeholder="animals"
            ref={animalsBladeRef}
          />
        </div>

        <div className="form-group">
          <label>Idisyncrasy</label>
          <input
            type="text"
            className="form-control"
            name="idiosyncrasy"
            placeholder="idiosyncrasy"
            ref={idiosyncrasyBladeRef}
          />
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Edit a Blade Runner"
        />
      </form>
    </div>
  )
}
export default withRouter(EditBladerunner);