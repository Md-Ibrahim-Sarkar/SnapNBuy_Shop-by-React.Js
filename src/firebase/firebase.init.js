// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb8WKAjrOq4JANk0jFWZ6SUUE8Z1g-bNY",
  authDomain: "snapnbuy-shop.firebaseapp.com",
  projectId: "snapnbuy-shop",
  storageBucket: "snapnbuy-shop.firebasestorage.app",
  messagingSenderId: "42249386731",
  appId: "1:42249386731:web:ba1814247b7f5751499cae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}