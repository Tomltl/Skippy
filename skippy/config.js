import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAZj9lFcWeHK6bZBO8aM64m-xj3yZqsF_Q",
  authDomain: "skippy-f0cc7.firebaseapp.com",
  projectId: "skippy-f0cc7",
  storageBucket: "skippy-f0cc7.appspot.com",
  messagingSenderId: "610921035891",
  appId: "1:610921035891:web:22f148f1bd3e1b7a095206",
  measurementId: "G-4989RCGLVT"
}

if (!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };