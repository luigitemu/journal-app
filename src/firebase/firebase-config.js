import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBkCCAwUuauBi0xzhDYK2G85puJCATamA0",
    authDomain: "journal-app-react-curso.firebaseapp.com",
    projectId: "journal-app-react-curso",
    storageBucket: "journal-app-react-curso.appspot.com",
    messagingSenderId: "262511368205",
    appId: "1:262511368205:web:0faf20a4c835b89d36dd44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}; 