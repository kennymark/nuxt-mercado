import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: 'AIzaSyBjV9fYhatAp5KwcdWR0XaExTx8jM3QQmk',
    authDomain: 'e-commerce-1ac62.firebaseapp.com',
    databaseURL: 'https://e-commerce-1ac62.firebaseio.com',
    projectId: 'e-commerce-1ac62',
    storageBucket: 'e-commerce-1ac62.appspot.com',
    messagingSenderId: '560020159163',
    appId: '1:560020159163:web:227cad9fb50de6a313479e',
    measurementId: 'G-HGLJMFTHX1'
}


!firebase.apps.length ? firebase.initializeApp(config) : ''

export const fb = firebase

export const auth = fb.auth()
export const firestore = fb.firestore()

