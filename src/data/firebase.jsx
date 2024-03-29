
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAse31A8pBf0h5g55PusSirxEumqFu0zCw",
  authDomain: "firabasecrud-b953a.firebaseapp.com",
  projectId: "firabasecrud-b953a",
  storageBucket: "firabasecrud-b953a.appspot.com",
  messagingSenderId: "915598786273",
  appId: "1:915598786273:web:8230803c25745770e841a0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db};