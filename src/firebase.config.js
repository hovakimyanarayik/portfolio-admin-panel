import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "portfolio-admin-abce4.firebaseapp.com",
  projectId: "portfolio-admin-abce4",
  storageBucket: "portfolio-admin-abce4.appspot.com",
  messagingSenderId: "143810263136",
  appId: "1:143810263136:web:9dd6550a05ca41cbacab05"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);