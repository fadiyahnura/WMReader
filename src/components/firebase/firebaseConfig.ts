// firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWYhKPKqpbBF5EC6kGh_F7AHcnLQvo68s",
    authDomain: "wmreader-fea83.firebaseapp.com",
    databaseURL: "https://wmreader-fea83-default-rtdb.firebaseio.com",
    projectId: "wmreader-fea83",
    storageBucket: "wmreader-fea83.appspot.com",
    messagingSenderId: "230952937777",
    appId: "1:230952937777:web:b2d67e53db7e8e7a0ca810",
    measurementId: "G-LZFZVJY3RT"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
