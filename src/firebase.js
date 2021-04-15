import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCQzjwbHx9wkguqEC7N3nTuWmP9RrK6bmM",
  authDomain: "checkmate-41b01.firebaseapp.com",
  projectId: "checkmate-41b01",
  storageBucket: "checkmate-41b01.appspot.com",
  messagingSenderId: "984970218351",
  appId: "1:984970218351:web:1fae923a7f7d008656369a",
  measurementId: "G-72B42L58BZ",
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;
