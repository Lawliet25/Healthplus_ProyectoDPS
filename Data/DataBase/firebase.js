
// Import the functions you need from the SDKs you need
import  firebase  from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ2cvvBWpqTMYtmZKGCsNTUeRY6DTGY3M",
  authDomain: "healhtplus-app.firebaseapp.com",
  projectId: "healhtplus-app",
  storageBucket: "healhtplus-app.appspot.com",
  messagingSenderId: "288012775684",
  appId: "1:288012775684:web:31621a3463f81a2cd42051"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


// Initialize Firebase
export default firebase;