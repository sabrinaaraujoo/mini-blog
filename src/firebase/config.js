import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0Cax9fd2hP3LlToICVXukMGNZYRaEqIA",
  authDomain: "miniblog-6188f.firebaseapp.com",
  projectId: "miniblog-6188f",
  storageBucket: "miniblog-6188f.appspot.com",
  messagingSenderId: "754916242089",
  appId: "1:754916242089:web:699e044371d9a9c74f6fb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
