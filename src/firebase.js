import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCn23JpkH_JUnW4aiWHrcZpdZoLEU1cng8",
    authDomain: "whatsapp-clone-7c05c.firebaseapp.com",
    projectId: "whatsapp-clone-7c05c",
    storageBucket: "whatsapp-clone-7c05c.appspot.com",
    messagingSenderId: "855650007735",
    appId: "1:855650007735:web:12e4276a2e0e3005c12b32",
    measurementId: "G-41FBXQJZWR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;