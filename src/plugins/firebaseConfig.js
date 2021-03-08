import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyC1HVubj72Lrw-sNgWpixRCggSCHwkMvsE",
    authDomain: "impossible-hotel.firebaseapp.com",
    projectId: "impossible-hotel",
    storageBucket: "impossible-hotel.appspot.com",
    messagingSenderId: "442004868702",
    appId: "1:442004868702:web:578c0931521ef1e2f52ecf",
    measurementId: "G-9JKH0Q3J5Q"
  };
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
