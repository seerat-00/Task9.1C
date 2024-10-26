
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDt4liB_XYMe--Cj9oJbNiR6QQgHUs-feU",
    authDomain: "login-web-2c25a.firebaseapp.com",
    projectId: "login-web-2c25a",
    storageBucket: "login-web-2c25a.appspot.com",
    messagingSenderId: "742458172800",
    appId: "1:742458172800:web:2dde9689e12639b7e74d65"
  };
  


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;
