import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQPOk6gh1dTFUTOAnCC79qSwkM-5FUjmU",
    authDomain: "codespaceacademy-97e59.firebaseapp.com",
    projectId: "codespaceacademy-97e59",
    storageBucket: "codespaceacademy-97e59.appspot.com",
    messagingSenderId: "956869922323",
    appId: "1:956869922323:web:710e3f2b5bb0526ff9f9e6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
