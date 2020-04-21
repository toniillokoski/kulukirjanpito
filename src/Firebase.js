import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC9yvYJX2A33b5yC4wJK-raxqa0dmVLWQE",
    authDomain: "kulukirjanpito-a2f15.firebaseapp.com",
    databaseURL: "https://kulukirjanpito-a2f15.firebaseio.com",
    projectId: "kulukirjanpito-a2f15",
    storageBucket: "kulukirjanpito-a2f15.appspot.com",
    messagingSenderId: "977666968519",
    appId: "1:977666968519:web:3462198af8e856022167e2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;