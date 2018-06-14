import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyAFGyTIu9Nt_vIHOPQrWVCMN_C_EsAW1Rs',
  authDomain: 'winnewshack.firebaseapp.com',
  databaseURL: 'https://winnewshack.firebaseio.com',
  projectId: 'winnewshack',
  storageBucket: 'winnewshack.appspot.com',
  messagingSenderId: '1075733477424'
}
firebase.initializeApp(config)
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
