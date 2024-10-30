// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIjp9GLi5JtvpuWnruDZszkH9Ec8kOSHM",
  authDomain: "cinemate-gpt-55ad3.firebaseapp.com",
  projectId: "cinemate-gpt-55ad3",
  storageBucket: "cinemate-gpt-55ad3.appspot.com",
  messagingSenderId: "638998558920",
  appId: "1:638998558920:web:0360b77c924589932bcdfd",
  measurementId: "G-57BLLB6G0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();