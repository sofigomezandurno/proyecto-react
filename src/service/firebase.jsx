// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDELIhpD1csb-GlgIyNReIa3nGN2b3sht8",
  authDomain: "proyecto-react-1b300.firebaseapp.com",
  projectId: "proyecto-react-1b300",
  storageBucket: "proyecto-react-1b300.appspot.com",
  messagingSenderId: "397610768277",
  appId: "1:397610768277:web:ac2ccc793849d6faee489c",
  measurementId: "G-9KBQK6FTS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;