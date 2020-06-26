import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


function ReplicantDetails({ replicant, saveReloadReplicant }) {
  console.log(replicant)

  const deleteReplicant = (_id) => {
    console.log("Eliminando...", _id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.value) {
        try {
          const url = (`http://localhost:4000/bladerunner/replicants/${_id}`);
          const result = await axios.delete(url);

          if (result.status === 200) {
            Swal.fire(
              'Retired!',
              'The Replicant has been retired.',
              'success'
            )
            //link to API:
            saveReloadReplicant(true);
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      }
    })
  }
  return (

    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p>
        Name: {replicant.name}
        {""}
      </p>
      <p>Gender: {replicant.age}</p>
      <p>Ages: {replicant.adress}</p>
      <p>InceptDate: {replicant.category}</p>
      <p>Model: {replicant.replicants}</p>
      <p>Funcitonality: {replicant.weapons}</p>
      <p>Physical Level: {replicant.date}</p>
      <p>Mental Level: {replicant.animals}</p>
      <p>Origin: {replicant.animals}</p>
      <p>Destiny Planet: {replicant.animals}</p>
      <p>Retired: {replicant.animals}</p>
      <p>Idiosyncrasy: {replicant.idiosyncrasy}</p>
      <div>
        <Link to={`/bladerunner/replicants/edit/${replicant._id}`} className="btn btn-success mr-2">Edit</Link>
        <button type="button" className="btn btn-danger" onClick={() => deleteReplicant(replicant._id)}>Delete &times;</button>
      </div>
    </li>

  );
}
export default ReplicantDetails;