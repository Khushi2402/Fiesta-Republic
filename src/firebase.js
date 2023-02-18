// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAOHU2mRQH08qzULOMSdezu73vH9h0bz88",
    authDomain: "fiesta-republic.firebaseapp.com",
    projectId: "fiesta-republic",
    storageBucket: "fiesta-republic.appspot.com",
    messagingSenderId: "526772233373",
    appId: "1:526772233373:web:0b025d3ea196f141a26074",
    measurementId: "G-SFZTLDEJ7L"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;