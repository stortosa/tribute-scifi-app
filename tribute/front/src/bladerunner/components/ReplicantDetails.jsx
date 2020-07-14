import React from 'react';
import { Link } from 'react-router-dom';

function ReplicantDetails({ replicant }) {
  console.log(replicant)

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p>Name: {replicant.name}</p>
      <p>Model: {replicant.model}</p>
      <p>Functionality: {replicant.functionality}</p>
      <p>Mental: {replicant.mental}</p>
      <p>Physical: {replicant.physical}</p>
      <p><img src={replicant.photo} /></p>
    </li>
  );
}
export default ReplicantDetails;