import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUj3-gU4uCDSnlaexTabynUfd-BuKsKwA",
    authDomain: "techathon-b44e6.firebaseapp.com",
    projectId: "techathon-b44e6",
    storageBucket: "techathon-b44e6.appspot.com",
    messagingSenderId: "266519479603",
    appId: "1:266519479603:web:f3dd472600630833edaa46",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, app };
