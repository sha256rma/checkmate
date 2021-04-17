import firebase from "firebase";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCQzjwbHx9wkguqEC7N3nTuWmP9RrK6bmM",
  authDomain: "checkmate-41b01.firebaseapp.com",
  projectId: "checkmate-41b01",
  storageBucket: "checkmate-41b01.appspot.com",
  messagingSenderId: "984970218351",
  appId: "1:984970218351:web:1fae923a7f7d008656369a",
  measurementId: "G-72B42L58BZ",
};

const firebaseApp = firebase.initializeApp(config);
export const db = firebase.firestore();
export const storage = firebase.storage();

// export const createProduct = (image, name, price, purchased, show) => {
//   return db.collection("SHOP").add({
//     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//     image,
//     name,
//     price,
//     purchased,
//     show,
//   });
// };
