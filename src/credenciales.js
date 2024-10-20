// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo9S0y-iOmVyvUNnwaGmG-xcK_O7UJGLw",
  authDomain: "blogturistico1-a2fe8.firebaseapp.com",
  projectId: "blogturistico1-a2fe8",
  storageBucket: "blogturistico1-a2fe8.appspot.com",
  messagingSenderId: "164104958589",
  appId: "1:164104958589:web:8db3cb85f0945eed067714",
  measurementId: "G-15TV77HZCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
