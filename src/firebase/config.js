// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDutphv951DsVMdspZIi204eIKloFjDMi4",
  authDomain: "journal-app-53968.firebaseapp.com",
  projectId: "journal-app-53968",
  storageBucket: "journal-app-53968.appspot.com",
  messagingSenderId: "798752808615",
  appId: "1:798752808615:web:9d6f9a9ec5ea6a15570582"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );