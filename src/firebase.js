import firebase from  "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmDnweWqB5hyOuSESCYTU1rulvEZKKXDQ",
    authDomain: "todo-app-25113.firebaseapp.com",
    databaseURL: "https://todo-app-25113.firebaseio.com",
    projectId: "todo-app-25113",
    storageBucket: "todo-app-25113.appspot.com",
    messagingSenderId: "778090469420",
    appId: "1:778090469420:web:42f8c2aa7074c7233b5989",
    measurementId: "G-NDD8TZB2ZX"
})

const db = firebaseApp.firestore();

export default db;