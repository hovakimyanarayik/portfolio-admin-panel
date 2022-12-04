// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKxgDiPQUlnHm2ITPm6tbN64xo5ooKFcE",
  authDomain: "portfolio-admin-abce4.firebaseapp.com",
  projectId: "portfolio-admin-abce4",
  storageBucket: "portfolio-admin-abce4.appspot.com",
  messagingSenderId: "143810263136",
  appId: "1:143810263136:web:9dd6550a05ca41cbacab05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)