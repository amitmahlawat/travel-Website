import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCia7XiHYcAXQ6fhkTX5ipkC7xaNmVqXHc",
    authDomain: "hotel-booking-e6e7b.firebaseapp.com",
    projectId: "hotel-booking-e6e7b",
    storageBucket: "hotel-booking-e6e7b.firebasestorage.app",
    messagingSenderId: "582777215344",
    appId: "1:582777215344:web:0fe562fab9644e602997b5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);