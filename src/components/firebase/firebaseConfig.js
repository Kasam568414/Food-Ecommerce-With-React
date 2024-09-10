// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP6eQRvpoXL_HBPtfGRLGDYalIYZuNzvA",
  authDomain: "food-ecomerce-authentication.firebaseapp.com",
  projectId: "food-ecomerce-authentication",
  storageBucket: "food-ecomerce-authentication.appspot.com",
  messagingSenderId: "396936708026",
  appId: "1:396936708026:web:372b880b5f1e22b8222783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth