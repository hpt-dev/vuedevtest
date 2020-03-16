import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyCMdYGXzx3mSQiAr-8hoxfdlj54QrDM4v4",
    authDomain: "vuedevtest.firebaseapp.com",
    databaseURL: "https://vuedevtest.firebaseio.com",
    projectId: "vuedevtest",
    storageBucket: "vuedevtest.appspot.com",
    messagingSenderId: "596376321258",
    appId: "1:596376321258:web:8ab21a8532d38e7a492b93",
    measurementId: "G-S7DDQCHWCP"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth() 
const currentUser = auth.currentUser

// date issue fix according to firebase
//const settings = {
//    timestampsInSnapshots: true
//}
//db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
//const postsCollection = db.collection('posts')
//const commentsCollection = db.collection('comments')
//const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    //postsCollection,
    //commentsCollection,
    //likesCollection
}