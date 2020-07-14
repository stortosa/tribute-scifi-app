import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import firebase from './firebase';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

//pages:
import HomeBlade from './bladerunner/components/HomeBlade';
//Components:
import Bladerunners from './bladerunner/components/Bladerunners';
import BladeDetails from './bladerunner/components/BladeDetails';
import Replicants from './bladerunner/components/Replicants';
import ReplicantDetails from './bladerunner/components/ReplicantDetails';

function App() {
  const date = new Date().getFullYear();

  const [bladerunner, saveBladerunner] = useState([]);
  const [replicants, saveReplicants] = useState([]);

  useEffect(() => {
    const fetchBlade = async () => {
      const db = firebase.firestore();
      const dataBlade = await db.collection('bladerunners').get()
      saveBladerunner(dataBlade.docs.map(doc => doc.data()))
    }
    fetchBlade();
  }, [saveBladerunner]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("replicants").get()
      saveReplicants(data.docs.map(doc => doc.data()))
    }
    fetchData();
  }, [saveReplicants])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/bladerunner/home" render={() => <HomeBlade />} />
        <Route exact path="/bladerunner" render={() =>
          <Bladerunners bladerunner={bladerunner} />} />
        <Route exact path="/replicants" render={() =>
          <Replicants replicants={replicants} />} />
        {/* <Route exact path="/replicants/:_id" render={() => <ReplicantDetails />} /> */}
      </Switch>
      <Footer date={date} />
    </Router>
  );
}

export default App;