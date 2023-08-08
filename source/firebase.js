import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1V14M_nlUqH7daUcpRaeFtYvgXCH-1u4",
  authDomain: "expense-tracker-2dd8e.firebaseapp.com",
  projectId: "expense-tracker-2dd8e",
  storageBucket: "expense-tracker-2dd8e.appspot.com",
  messagingSenderId: "986198679446",
  appId: "1:986198679446:web:df26fa892c51eb143e07b7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
