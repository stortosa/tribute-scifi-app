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
import EditBladerunner from './bladerunner/components/EditBladerunner';
import AddReplicant from './bladerunner/components/AddReplicant';
import Replicants from './bladerunner/components/Replicants';
import ReplicantDetails from './bladerunner/components/ReplicantDetails';
import EditReplicant from './bladerunner/components/EditReplicant';


function App() {
  const date = new Date().getFullYear();

  const [bladerunner, saveBladerunner] = useState([]);
  const [reloadBladerunner, saveReloadBladerunner] = useState(true);
  const [replicants, saveReplicants] = useState([]);
  const [reloadReplicant, saveReloadReplicant]= useState(true);

  useEffect(() => {
    if (reloadBladerunner) {
      const requestApi = async () => {
        const result = await axios.get('http://localhost:4000/bladerunner/')
        // console.log(result.data.bladerunners);
        saveBladerunner(result.data.bladerunners)
      }
      requestApi();
      //change a false reload of bladerunner:
      saveReloadBladerunner(false);
    }
  }, [reloadBladerunner]);

  useEffect(()=>{
    if(reloadReplicant){
      const requestApiR = async () => {
        const result = await axios.get('http://localhost:4000/replicants/')
        // console.log(result.data.replicants);
        saveReplicants(result.data.replicants);
      }
      requestApiR();
      //change a false reload of replicants:
      saveReloadReplicant(false);
    }
  },[reloadReplicant]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/bladerunner/home" render={()=> <HomeBlade />} />
        <Route exact path="/bladerunner" render={() =>
          <Bladerunners bladerunner={bladerunner} saveReloadBladerunner={saveReloadBladerunner} />} />
        <Route exact path="/bladerunner/new" render={() => <AddBladerunner saveReloadBladerunner={saveReloadBladerunner} />} />
        <Route exact path="/bladerunner/:_id" render={() => <BladeDetails />} />
        <Route exact path="/bladerunner/edit/:_id" render={(props) => {
          // console.log(props.match.params);
          const idBlade = (props.match.params._id);
          const oneBladerunner = bladerunner.filter(bladerunne => bladerunne._id === idBlade);
          return (
            <EditBladerunner
              oneBladerunner={oneBladerunner[0]}
              saveReloadBladerunner={saveReloadBladerunner} />
          )
        }} />
        <Route exact path="/replicants" render={() =>
          <Replicants replicants={replicants} saveReloadReplicant={saveReloadReplicant} />} />
        <Route exact path="/replicants/new" render={() => <AddReplicant saveReloadReplicant={saveReloadReplicant} />} />
        <Route exact path="/replicants/:_id" render={() => <ReplicantDetails />} />
        <Route exact path="/replicants/edit/:_id" render={(props) => {
          // console.log(props.match.params);
          const idReplicant = (props.match.params._id);
          const oneReplicant = replicants.filter(replicant => replicant._id === idReplicant);
          return (
            <EditReplicant
              oneReplicant={oneReplicant[0]}
              saveReloadReplicant={saveReloadReplicant} />
          )
        }} />
      </Switch>
      <Footer date={date} />
    </Router>
  );
}

export default App;
