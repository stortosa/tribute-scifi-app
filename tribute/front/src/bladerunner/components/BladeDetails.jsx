import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../bladecss.css';

function BladeDetails({ bladerunne, saveReloadBladerunner }) {
  console.log(bladerunne)

  const deleteBladerunner = (_id) => {
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
          const url = (`http://localhost:4000/bladerunner/${_id}`);
          const result = await axios.delete(url);

          if (result.status === 200) {
            Swal.fire(
              'Deleted!',
              'Your Blade Runner has been deleted.',
              'success'
            )
            //link to API:
            saveReloadBladerunner(true);
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
        Name: {bladerunne.name}
        {""}
      </p>
      <p>Age: {bladerunne.age}</p>
      <p>Adress: {bladerunne.adress}</p>
      <p>Category: {bladerunne.category}</p>
      <p>Replicants Retired: {bladerunne.replicants}</p>
      <p>Weapons: {bladerunne.weapons}</p>
      <p>Date: {bladerunne.date}</p>
      <p>Animlas: {bladerunne.animals}</p>
      <p>Idiosyncrasy: {bladerunne.idiosyncrasy}</p>
      <div>
        <Link to={`/bladerunner/edit/${bladerunne._id}`} className="btn btn-success mr-2">Edit</Link>
        <button type="button" className="btn btn-danger" onClick={() => deleteBladerunner(bladerunne._id)}>Delete &times;</button>
      </div>
    </li>

  );
}
export default BladeDetails;