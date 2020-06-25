import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

//pages:
import HomeBlade from './bladerunner/components/HomeBlade';
//Components:
import AddBladerunner from './bladerunner/components/AddBladerunner';
import Bladerunners from './bladerunner/components/Bladerunners';
import BladeDetails from './bladerunner/components/BladeDetails';
import EditBladerunner from './bladerunner/components/EditBladerunner.jsx';


function App() {
  const date = new Date().getFullYear();

  const [bladerunner, saveBladerunner] = useState([]);
  const [reloadBladerunner, saveReloadBladerunner] = useState(true);


  useEffect(() => {
    if (reloadBladerunner) {
      const requestApi = async () => {
        const result = await axios.get('http://localhost:4000/bladerunner/bladerunner/')
        // console.log(result.data.bladerunners);
        saveBladerunner(result.data.bladerunners)
      }
      requestApi();
      //change a false reload of bladerunner:
      saveReloadBladerunner(false);
    }
  }, [reloadBladerunner]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/bladerunner/home" render={()=> <HomeBlade />} />
        <Route exact path="/bladerunner/bladerunner" render={() =>
          <Bladerunners bladerunner={bladerunner} saveReloadBladerunner={saveReloadBladerunner} />} />
        <Route exact path="/bladerunner/bladerunner/new" render={() => <AddBladerunner saveReloadBladerunner={saveReloadBladerunner} />} />
        <Route exact path="/bladerunner/bladerunner/:_id" render={() => <BladeDetails />} />
        <Route exact path="/bladerunner/bladerunner/edit/:_id" render={(props) => {
          console.log(props.match.params);
          const idBlade = (props.match.params._id);
          const oneBladerunner = bladerunner.filter(bladerunne => bladerunne._id === idBlade);
          return (
            <EditBladerunner
              oneBladerunner={oneBladerunner[0]}
              saveReloadBladerunner={saveReloadBladerunner} />
          )
        }} />
      </Switch>
      <Footer date={date} />
    </Router>
  );
}

export default App;
