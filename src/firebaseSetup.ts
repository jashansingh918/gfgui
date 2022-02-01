import firebase from "firebase/app";
import * as dotenv from "dotenv";

//we are reading .env file
dotenv.config();

const firebaseConfig={
    //we are reading variable in .env file
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
}

const app = firebase.initializeApp(firebaseConfig);
//show show the correct value and it should not show undefined
console.log(app.options)
