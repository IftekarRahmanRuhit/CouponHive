// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhPgNgnEzg9yth3Dj5eeza2w0c5YBffs",
  authDomain: "couponhive-46f22.firebaseapp.com",
  projectId: "couponhive-46f22",
  storageBucket: "couponhive-46f22.firebasestorage.app",
  messagingSenderId: "90219861195",
  appId: "1:90219861195:web:89ec202279299cb805374e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);