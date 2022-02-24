import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBmW35i6ap4CFMQCsoxUX-sDpaifCsenRA",
    authDomain: "tinder-clone-84cf9.firebaseapp.com",
    projectId: "tinder-clone-84cf9",
    storageBucket: "tinder-clone-84cf9.appspot.com",
    messagingSenderId: "158094385830",
    appId: "1:158094385830:web:4683bb6a2ed28ed5758a67",
    measurementId: "G-K7C4RBNCXK"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

export default db;
