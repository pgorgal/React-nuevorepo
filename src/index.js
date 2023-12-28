import { initializeApp } from "firebase/app";
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { getFirestore } from "firebase/firestore";

const el = document.getElementById("root")


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcI4Sp_csvecsPJEhVArpOudCpZR_CuFE",
    authDomain: "bendita-corteza.firebaseapp.com",
    projectId: "bendita-corteza",
    storageBucket: "bendita-corteza.appspot.com",
    messagingSenderId: "129688998225",
    appId: "1:129688998225:web:fa9b76c3bbd78b59d80370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(el)
root.render(<App/>)

export const db = getFirestore(app)