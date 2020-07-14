import * as firebase from 'firebase';
import "firebase/storage";

// Your web app's Firebase configuration
// Remenber change to ocult with process.env. ...
var firebaseConfig = {
  apiKey: "AIzaSyAMZh5GNZpqZW2Na9ExMoIm4sbZEKLtSOM",
  authDomain: "tribute-scifi-app.firebaseapp.com",
  databaseURL: "https://tribute-scifi-app.firebaseio.com",
  projectId: "tribute-scifi-app",
  storageBucket: "tribute-scifi-app.appspot.com",
  messagingSenderId: "673309883140",
  appId: "1:673309883140:web:92fcc390169b7b7106ee51",
  measurementId: "G-NLK7FLG3BZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };