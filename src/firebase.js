import firebase from 'firebase/app'
import  'firebase/firestore'

//import * as firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyDCQ76_3DqjyPpUOwICFmQxtGfwqBptO2Q",
        authDomain: "messenger-clone-68194.firebaseapp.com",
        databaseURL: "https://messenger-clone-68194-default-rtdb.firebaseio.com",
        projectId: "messenger-clone-68194",
        storageBucket: "messenger-clone-68194.appspot.com",
        messagingSenderId: "9786761871",
        appId: "1:9786761871:web:4643343b806e9a5da846fa"
 
      

})

const db = firebaseApp.firestore()

export default db