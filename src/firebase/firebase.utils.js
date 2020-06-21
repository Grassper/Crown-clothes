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

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;