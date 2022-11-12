// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAJssVJ6wT-sUtuZEmO3JCfyOni_089oI",
  authDomain: "food-order-b9ef3.firebaseapp.com",
  projectId: "food-order-b9ef3",
  storageBucket: "food-order-b9ef3.appspot.com",
  messagingSenderId: "445929702290",
  appId: "1:445929702290:web:fb8777e2f441d9942fb74b",
  measurementId: "G-PDMFPHN74F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;
