import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Axios from 'axios'


const config = {
    apiKey: "AIzaSyCGSjPUyaSlaO6qJR2tNBGbGpKOeclZGSY",
    authDomain: "portfolio-29a89.firebaseapp.com",
    databaseURL: "https://portfolio-29a89.firebaseio.com",
    projectId: "portfolio-29a89",
    storageBucket: "portfolio-29a89.appspot.com",
    messagingSenderId: "48784013035",
    appId: "1:48784013035:web:7033fe1aaca522bb04b0ae",
    measurementId: "G-9M9DEGBKKV"

};

const fire = firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

firebase.firestore();

export { fire, Axios }



