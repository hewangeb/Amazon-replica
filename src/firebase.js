// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBQOJb_Rf8u8qtJKbtZec9v8JCaNL9YasU",
authDomain: "clone-8297e.firebaseapp.com",
projectId: "clone-8297e",
storageBucket: "clone-8297e.appspot.com",
messagingSenderId: "874584176169",
appId: "1:874584176169:web:63389b725f19a959fd8e38",
measurementId: "G-YH9T7YTCXS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
