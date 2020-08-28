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

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

// code to add data into our application

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    // create new document with random unique id
    const newDocRef = collectionRef.doc(); 
    batch.set(newDocRef,obj)
  })

  // to execute the batch

  return await batch.commit();
}

// modify the data retrieve from the database 

export const convertCollectionSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{});
}

// get current user in the firebase database it is used to session persistance

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged( userAuth => {
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
}

export default firebase;