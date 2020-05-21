import * as firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: 'YOUR_FIREBASE_API_KEY',
    authDomain: 'YOUR_FIREBASE_AUTH_DOMAIN',
    databaseURL: 'YOUR_FIREBASE_DB_URL',
    projectId: 'YOUR_FIREBASE_PROJECT_ID',
    storageBucket: '',
    messagingSenderId: 'YOUR_FIREBASE_MESSAGING_SENDER_ID',
    appId: 'YOUR_FIREBASE_APP_ID'
};
firebase.initializeApp(firebaseConfig);

export const emailAuthProvider = new firebase.auth.EmailAuthProvider();

export default firebase;