import React, { Fragment } from 'react';
import ReplicantDetails from './ReplicantDetails';

function Replicants({ replicants }) {
  console.log(replicants)
  return (
    <Fragment>
      <h1 className="text-center">Replicants</h1>
      <ul className="list-group mt-5">
        {replicants.map(replicant => (
          <ReplicantDetails key={replicant.name} replicant={replicant} />
        ))}
      </ul>
    </Fragment>
  )
}
export default Replicants;