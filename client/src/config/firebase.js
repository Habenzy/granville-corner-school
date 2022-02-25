// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8SQFvZPLixx1cB5VwTWhotHtxcs7dDHw",
  authDomain: "granville-corner-school.firebaseapp.com",
  projectId: "granville-corner-school",
  storageBucket: "granville-corner-school.appspot.com",
  messagingSenderId: "1015380806564",
  appId: "1:1015380806564:web:79f8fbcb36ebbb7acd0f31",
  measurementId: "G-RKN37020Q8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);

export {db, app}

// let gallerySetup = [
  
// ];


// gallerySetup.forEach(async (entry) => {
//   await setDoc(doc(db, "restoration"), entry);
// });


