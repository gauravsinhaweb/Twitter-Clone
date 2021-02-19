import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBytZjd0QLEded_hKOTKFVxp2KoxlWt1aE",
  authDomain: "twitter-clone-e0d37.firebaseapp.com",
  projectId: "twitter-clone-e0d37",
  storageBucket: "twitter-clone-e0d37.appspot.com",
  messagingSenderId: "451874116231",
  appId: "1:451874116231:web:9d7c4fe052cd1ca37c9e22",
  measurementId: "G-7FS6B75LZR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
