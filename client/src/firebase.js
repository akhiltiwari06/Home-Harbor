// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "home-harbor-9e948.firebaseapp.com",
  projectId: "home-harbor-9e948",
  storageBucket: "home-harbor-9e948.appspot.com",
  messagingSenderId: "210796685545",
  appId: "1:210796685545:web:5dc20ef824bbe96585a878",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
