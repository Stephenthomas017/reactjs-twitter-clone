import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjZvbl-sPloSXB0FmkPqfGJcXSpBoAODk",
    authDomain: "twitter-clone-85926.firebaseapp.com",
    databaseURL: "https://twitter-clone-85926.firebaseio.com",
    projectId: "twitter-clone-85926",
    storageBucket: "twitter-clone-85926.appspot.com",
    messagingSenderId: "45836010262",
    appId: "1:45836010262:web:f8f13b4db3d322f59d0637",
    measurementId: "G-QBGVS2DQ21"
  };
   const firebaseApp=firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   export default db;