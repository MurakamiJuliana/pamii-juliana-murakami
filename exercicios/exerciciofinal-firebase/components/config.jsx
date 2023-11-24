// FEITO POR: JULIANA MURAKAMI && RAÍNE JARDIM

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0wHiRtK_Lb0v6wV-Kd7sBB7Y4LIr5tlg",
  authDomain: "firestore-crud-b06f8.firebaseapp.com",
  projectId: "firestore-crud-b06f8",
  storageBucket: "firestore-crud-b06f8.appspot.com",
  messagingSenderId: "535137456478",
  appId: "1:535137456478:web:4321399c4e3ae6290dffcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);