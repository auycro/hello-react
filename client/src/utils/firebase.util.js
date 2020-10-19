import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID, 
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userAuth);
  
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log('displayname: ',{displayName});
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        //...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Login with Google
const googleAuth = new firebase.auth.GoogleAuthProvider();
googleAuth.setCustomParameters({
  prompt:'select_account'
});
export const signInWithGoogle = () => (auth.signInWithPopup(googleAuth)); 

//Login with Email Password
//var email, password;
//const createUserWithEmailPassword = auth.createUserWithEmailAndPassword(email,password);
//const signInWithEmailPassword = auth.signInWithEmailAndPassword(email,password).then((credential)=>{
//  console.log(credential);
//});
//export {createUserWithEmailPassword, signInWithEmailPassword};

export default firebase;