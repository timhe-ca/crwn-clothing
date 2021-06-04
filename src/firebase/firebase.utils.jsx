import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDkxhZq5-rlFrUzws4xUBV8gwSUhv71mEU",
    authDomain: "crwn-db-73851.firebaseapp.com",
    projectId: "crwn-db-73851",
    storageBucket: "crwn-db-73851.appspot.com",
    messagingSenderId: "361331271238",
    appId: "1:361331271238:web:098aac7a688bb885db8c47",
    measurementId: "G-5JXK1Z2349"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
