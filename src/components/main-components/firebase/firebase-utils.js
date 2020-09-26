import firebase from "firebase/app";
import "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: "shofiqul-portfolio",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialization
firebase.initializeApp(firebaseConfig);

// Form Data storing in Firebase Firestore

export const FormSubmit = (email, message) => {
  firebase.firestore().collection("messages").add({
    email,
    message,
  });
};
