import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG2h_p8RD1Nh4FGsGvGtVks5dcHm4hVNw",
    authDomain: "olx-clone-52726.firebaseapp.com",
    projectId: "olx-clone-52726",
    storageBucket: "olx-clone-52726.appspot.com",
    messagingSenderId: "738187063597",
    appId: "1:738187063597:web:ec156bce360454d69663a4",
    measurementId: "G-DYYRGTP33W"
  };

export default firebase.initializeApp(firebaseConfig)