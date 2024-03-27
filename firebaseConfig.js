// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZeLNXVR_aq0LAOH7d0cPhDM1aNfu0l1E",
  authDomain: "file-sharing-app-add67.firebaseapp.com",
  projectId: "file-sharing-app-add67",
  storageBucket: "file-sharing-app-add67.appspot.com",
  messagingSenderId: "97204943040",
  appId: "1:97204943040:web:e78f9f2c98aac3e70b1525",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
