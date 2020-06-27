import React, { useState, useRef } from 'react';
import Error from '../../components/Error';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function EditReplicant(props) {
  const { history, oneReplicant, saveReloadReplicant } = props;

  console.log(oneReplicant);

  //generate Refs:
  const nameReplicantRef = useRef('');
  const genderReplicantRef = useRef('');
  const ageReplicantRef = useRef('');
  const inceptReplicantRef = useRef('');
  const modelReplicantRef = useRef('');
  const functionalityReplicantRef = useRef('');
  const phsysicalReplicantRef = useRef('');
  const mentalReplicantRef = useRef('');
  const originReplicantRef = useRef('');
  const destinyReplcianRef = useRef('');
  const retiredReplicantRef = useRef('');
  const idiosyncrasyReplicantRef = useRef('');

  const [error, saveError] = useState(false);
  const [stateEdit, saveStateEdit] = useState('');

  const editReplicant = async (e) => {

    e.preventDefault();
    //catch form´s values

    // validation
    const newName = nameReplicantRef.current.value,
      newGender = genderReplicantRef.current.value,
      newAge = ageReplicantRef.current.value,
      newIncept = inceptReplicantRef.current.value,
      newModel = modelReplicantRef.current.value,
      newFunctionality = functionalityReplicantRef.current.value,
      newphysical = phsysicalReplicantRef.current.value,
      newMental = mentalReplicantRef.current.value,
      newOrigin = originReplicantRef.current.value,
      newDestiny = destinyReplcianRef.current.value,
      newRetired = retiredReplicantRef.current.value,
      newIdiosyncrasy = idiosyncrasyReplicantRef.current.value;

    if (newName === '' || newGender === '' || newAge === '' || newIncept === '' || newModel === '' || newFunctionality === '' || newphysical === '' || newMental === '' || newOrigin === '' || newDestiny === '' || newRetired === '' || newIdiosyncrasy === '') {
      saveError(true);
      return;
    }

    saveError(false);

    // Values from Form
    const editingReplicants = {
      name: newName,
      gender: newGender,
      age: newAge,
      inceptDate: newIncept,
      model: newModel,
      functionality: newFunctionality,
      physicalLevel: newphysical,
      mentalLevel: newMental,
      origin: newOrigin,
      destinyPlanet: newDestiny,
      retired: newRetired,
      idiosyncrasy: newIdiosyncrasy
  }
    console.log(editingReplicants);

    // send request 
    const url = `http://localhost:4000/replicants/${oneReplicant._id}`;

    try {

      const result = await axios.put(url, editingReplicants);

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
    // user redirect to replicants added:
    saveReloadReplicant(true);
    history.push('/replicants')
  }

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="text-center">Edit a Replicant</h1>

      {error ? <Error message="All fields are mandatory" /> : null}

      <form className="mt-5" onSubmit={editReplicant}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            ref={nameReplicantRef}
          // defaultValue={}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            placeholder="gender"
            ref={genderReplicantRef}
          // defaultValue={oneGoal.color}

          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            placeholder="age"
            ref={ageReplicantRef}
          // defaultValue={}
          />
        </div>

        <div className="form-group">
          <label>Incept</label>
          <input
            type="text"
            className="form-control"
            name="incept"
            placeholder="incept"
            ref={inceptReplicantRef}
          />
        </div>

        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            className="form-control"
            name="model"
            placeholder="model"
            ref={modelReplicantRef}
          />
        </div>

        <div className="form-group">
          <label>Functionality</label>
          <input
            type="text"
            className="form-control"
            name="functionality"
            placeholder="functionality"
            ref={functionalityReplicantRef}
          />
        </div>

        <div className="form-group">
          <label>Physical Level</label>
          <input
            type="text"
            className="form-control"
            name="physical level"
            placeholder="physical level"
            ref={phsysicalReplicantRef}
          />
        </div>

        <div className="form-group">
          <label>Mental Level</label>
          <input
            type="text"
            className="form-control"
            name="mental level"
            placeholder="mental level"
            ref={mentalReplicantRef}
          />
        </div>

        <div className="form-group">
          <label>Origin</label>
          <input
            type="text"
            className="form-control"
            name="origin"
            placeholder="origin"
            ref={originReplicantRef}
          />
        </div>

        <div className="form-group">
          <label>Destiny</label>
          <input
            type="text"
            className="form-control"
            name="destiny"
            placeholder="destiny"
            ref={destinyReplcianRef}
          />
        </div>

        <div className="form-group">
          <label>retired</label>
          <input
            type="text"
            className="form-control"
            name="retired"
            placeholder="retired"
            ref={retiredReplicantRef}
          />
        </div>

        <div className="form-group">
          <label>Idisyncrasy</label>
          <input
            type="text"
            className="form-control"
            name="idiosyncrasy"
            placeholder="idiosyncrasy"
            ref={idiosyncrasyReplicantRef}
          />
        </div>

        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Edit a Replicant"
        />
      </form>
    </div>
  )
}
export default withRouter(EditReplicant);