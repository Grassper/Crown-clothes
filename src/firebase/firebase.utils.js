import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyDGkkY2V-jx2TyICEz4DGdeWWoSHDwZCZM",
    authDomain: "crown-clothes-e3884.firebaseapp.com",
    databaseURL: "https://crown-clothes-e3884.firebaseio.com",
    projectId: "crown-clothes-e3884",
    storageBucket: "crown-clothes-e3884.appspot.com",
    messagingSenderId: "907940446606",
    appId: "1:907940446606:web:1871c319367990e39064df",
    measurementId: "G-X11CXH1RXJ"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const createUserProfileDocument = async (userAuth, additionData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData
      })
    }
    catch (error){
      console.log("error creatind a user",error.message);
    }
  }

  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;