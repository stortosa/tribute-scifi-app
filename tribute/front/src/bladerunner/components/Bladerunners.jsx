import React, { Fragment } from 'react';
import BladeDetails from './BladeDetails';

function Bladerunners({ bladerunner, saveReloadBladerunner }) {
  console.log(bladerunner)
  return (
    <Fragment>
      <h1 className="text-center">Blade Runners</h1>
      <ul className="list-group mt-5">
        {bladerunner.map(bladerunne => (
          <BladeDetails key={bladerunne._id} bladerunne={bladerunne} saveReloadBladerunner={saveReloadBladerunner} />
        ))}
      </ul>
    </Fragment>
  )
}
export default Bladerunners;