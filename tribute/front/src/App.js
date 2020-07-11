import React, { useState, useEffect, Children } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import firebase from './firebase';

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
  const [reloadReplicant, saveReloadReplicant] = useState(true);

  const [dataFirebase, setdataFirebase] = useState([]);

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

  useEffect(() => {
    if (reloadReplicant) {
      const requestApiR = async () => {
        const result = await axios.get('http://localhost:4000/replicants/')
        // console.log(result.data.replicants);
        saveReplicants(result.data.replicants);
      }
      requestApiR();
      //change a false reload of replicants:
      saveReloadReplicant(false);
    }
  }, [reloadReplicant]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("replicants").get()
      setdataFirebase(data.docs.map(doc => doc.data()))
      console.log(setdataFirebase);
    }
    fetchData();

  }, [])
  const url = ('https://firebasestorage.googleapis.com/v0/b/tribute-scifi-app.appspot.com/o/imgs%2Froybatty.gif?alt=media&token=db89b0ed-4265-493e-a96f-e244f5d75484')
  // console.log(url);  borrar lo de arriba (url)

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/bladerunner/home" render={() => <HomeBlade />} />
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
        {/* crear la ruta y el component ficha genérica y con un map que salga con los datos de cada replicante */}
        <div>
          {dataFirebase.map(dataFire => (
            <ul key={dataFire.name}>
              <li>{dataFire.name}</li>
              <li>{dataFire.model}</li>
              <li>{dataFire.functionality}</li>
              <li>{dataFire.mental}</li>
              <li>{dataFire.phisycal}</li>
              <li><img src={dataFire.photo} /></li>
            </ul>
          ))}
        </div>
      </Switch>
      <Footer date={date} />
    </Router>
  );
}

export default App;