import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQCP9mxMTKI8BT-64GHGn6EJSR9h88gZg",
    authDomain: "roommate-finder-project.firebaseapp.com",
    projectId: "roommate-finder-project",
    storageBucket: "roommate-finder-project.appspot.com", 
    messagingSenderId: "516139615851",
    appId: "1:516139615851:web:7ad74fd029d6d23360532e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
