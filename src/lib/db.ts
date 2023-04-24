// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtwKqUGnrObFK7iaHxwExZRuBRGGh1Hgk",
  authDomain: "xchange-384315.firebaseapp.com",
  projectId: "xchange-384315",
  storageBucket: "xchange-384315.appspot.com",
  messagingSenderId: "25914673229",
  appId: "1:25914673229:web:e702bd538cdd9a38ddf404",
  measurementId: "G-HN2F726EQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);