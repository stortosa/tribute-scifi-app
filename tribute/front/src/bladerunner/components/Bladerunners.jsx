import React, { Fragment } from 'react';
import BladeDetails from './BladeDetails';

function Bladerunners({ bladerunner }) {
  console.log(bladerunner)
  return (
    <Fragment>
      <h1 className="text-center">Blade Runners</h1>
      <ul className="list-group mt-5">
        {bladerunner.map(bladerunne => (
          <BladeDetails key={bladerunne.name} bladerunne={bladerunne} />
        ))}
      </ul>
    </Fragment>
  )
}
export default Bladerunners;