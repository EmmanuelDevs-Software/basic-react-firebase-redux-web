import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/firestore'; //v9
import 'firebase/compat/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAPvilbJzTk-lkXSpgnnzqIgmqOXSOdrT4",
  authDomain: "idea-77fa0.firebaseapp.com",
  projectId: "idea-77fa0",
  storageBucket: "idea-77fa0.appspot.com",
  messagingSenderId: "978376056505",
  appId: "1:978376056505:web:b4c511820f954aa45c8568",
  measurementId: "G-0PQFFYK09Q"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 