import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAPzEbpjiDCoDbomhXApSbCgzLt5ON2ZGQ",
    authDomain: "impactaura-a14cc.firebaseapp.com",
    databaseURL: "https://impactaura-a14cc-default-rtdb.firebaseio.com",
    projectId: "impactaura-a14cc",
    storageBucket: "impactaura-a14cc.appspot.com",
    messagingSenderId: "474288867613",
    appId: "1:474288867613:web:0cadf9cf1251628ee179f4",
    measurementId: "G-LQ8XJLSPPX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { firestore, app, auth };
