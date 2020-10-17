import firebase from 'firebase/app'
import 'firebase/auth'
//import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "**********",
  authDomain: "**********.firebaseapp.com",
  databaseURL: "https//**********",
  projectId: "**********",
  storageBucket: "**********.firebaseio.com",
  messagingSenderId: "**********.appspot.com",
  appId: "**********",
  measurementId: "**********" 
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;