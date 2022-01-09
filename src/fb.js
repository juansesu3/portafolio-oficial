import firebase from 'firebase/compat/app'
import "firebase/compat/storage"
import "firebase/compat/firestore"

export const app =firebase.initializeApp({
    "projectId": "portafolio-b0d04",
    "appId": "1:739175684454:web:711a1e2c761afd9952d0a7",
    "storageBucket": "portafolio-b0d04.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDvOSOT3SwjVSGnqATUWw-JRT_ZjSmUV_M",
    "authDomain": "portafolio-b0d04.firebaseapp.com",
    "messagingSenderId": "739175684454"
  });