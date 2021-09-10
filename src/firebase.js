import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDT8HpnPMfEM0Nd62cF6xhAkoiHW7AU9iE",
  databaseURL: "https://clone-react-cff1d-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyB5Jo15nBLA7lE4qJTkxtBW53ae6MKpPQ8",
  authDomain: "gclone-eaa5c.firebaseapp.com",
  projectId: "gclone-eaa5c",
  storageBucket: "gclone-eaa5c.appspot.com",
  messagingSenderId: "95776379351",
  appId: "1:95776379351:web:150941e71ff7f4a1e6fb92",
  measurementId: "G-YQCRTVGFW0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
