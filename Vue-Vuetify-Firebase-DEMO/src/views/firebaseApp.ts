import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDrgm6-2dZqf-TSEoM_O6gYOH2Irg2N30A",
  authDomain: "fir-ab198.firebaseapp.com",
  databaseURL: "https://fir-ab198.firebaseio.com",
  projectId: "fir-ab198",
  storageBucket: "fir-ab198.appspot.com",
  messagingSenderId: "1059073142532"
};

let app = firebase.initializeApp(config);
const database = app.firestore();
database.settings({ timestampsInSnapshots: true });
export const db = database;
