import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBUfxkiHQr3ddNokD9QvrsJjb8UI-FptK0",
  authDomain: "instagram-clone-cdaf2.firebaseapp.com",
  databaseURL: "https://instagram-clone-cdaf2-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-cdaf2",
  storageBucket: "instagram-clone-cdaf2.appspot.com",
  messagingSenderId: "377944391860",
  appId: "1:377944391860:web:ec893866881108848c17e1",
};

const firebaseApp = !firebase.apps.length ?
  firebase.initializeApp(firebaseConfig)
  : firebase.app();
;

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const provider = new firebase.auth.FacebookAuthProvider();

export { db, auth, provider };