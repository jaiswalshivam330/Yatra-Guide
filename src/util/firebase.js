import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhpn1PtmIfUQ0tuOOFT-rBerJrfrP5Hdo",
  authDomain: "yatra-guide.firebaseapp.com",
  databaseURL: "https://yatra-guide-default-rtdb.firebaseio.com",
  projectId: "yatra-guide",
  storageBucket: "yatra-guide.appspot.com",
  messagingSenderId: "672585387926",
  appId: "1:672585387926:web:0127ade2598001b8f757b7"
};
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase;
  