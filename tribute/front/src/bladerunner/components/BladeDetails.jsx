import React from 'react';

function BladeDetails({ bladerunne }) {
  console.log(bladerunne)

  return (

    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p>
        Name: {bladerunne.name}
        {""}
      </p>
      <p>Category: {bladerunne.category}</p>
      <p>Weapons: {bladerunne.weapon}</p>
      <p>Date: {bladerunne.date}</p>
      <p>Animlas: {bladerunne.animals}</p>
      <p><img src={bladerunne.photo} alt="photo" /></p>
    </li>
  );
}
export default BladeDetails;