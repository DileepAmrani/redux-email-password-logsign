import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyB8ehN2aWo1cXH2zoD_yPjkZoQLPqhskos",
    authDomain: "todo-react-log.firebaseapp.com",
    databaseURL: "https://todo-react-log.firebaseio.com",
    projectId: "todo-react-log",
    storageBucket: "todo-react-log.appspot.com",
    messagingSenderId: "611326521930",
    appId: "1:611326521930:web:3bb58ac13694442997acb3"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebase.database()
 export {
     firebaseApp,
     database
 }