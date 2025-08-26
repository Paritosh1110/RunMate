// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmvAr_Sfno1AKhNhtwyznntDAsLbIem-s",
  authDomain: "runmate-c3634.firebaseapp.com",
  projectId: "runmate-c3634",
  storageBucket: "runmate-c3634.firebasestorage.app",
  messagingSenderId: "200889826430",
  appId: "1:200889826430:web:8ab7e5d5aa88e1e7bbac2f",
  measurementId: "G-BWNH3EGSSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage }; 