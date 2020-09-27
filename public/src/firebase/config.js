import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAllccxvibxj4bmsXSq8ysL-9uwggA-l-0",
  authDomain: "reacttech-8ad9b.firebaseapp.com",
  databaseURL: "https://reacttech-8ad9b.firebaseio.com",
  projectId: "reacttech-8ad9b",
  storageBucket: "reacttech-8ad9b.appspot.com",
  messagingSenderId: "433822558948",
  appId: "1:433822558948:web:e500529bd440ca23f8daf1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };