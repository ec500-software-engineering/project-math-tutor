//Dependencies
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const http = require('http')
const admin = require('firebase-admin');
const firebase = require('firebase');
const auth = require("firebase/auth");
//const firebaseui = require('firebaseui');

/*
 * firebase
 */
var serviceAccount = require('./key/mathpath-c0a60-firebase-adminsdk-6rcgk-b9d0cc34cf.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mathpath-c0a60.firebaseio.com"
});


/*
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});
*/


//set up root direcrtory
app.get('/', function(req, res){
    res.sendFile(__dirname + '/src/login.html')
})//post main page

http.Server(app).listen((process.env.PORT || 3000),function(){
    console.log('listening on *:3000')
})


