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
})//post main page (right now its login)

app.get('/profile', function(req, res){
    res.sendFile(__dirname + '/src/profile.html')
})

app.get('/signup', function(req, res){
    res.sendFile(__dirname + '/src/signup.html')
})

app.get('/class', function(req, res){
    res.sendFile(__dirname + '/src/class.html')
})


//resource pages
app.get('/res/logo', function(req, res){
    res.sendFile(__dirname + '/resources/Logo.png')
})

app.get('/styles/style', function(req, res){
    res.sendFile(__dirname + '/styles/style.css')
})

app.get('/script/login', function(req, res){
    res.sendFile(__dirname + '/scripts/login.js')
})

app.get('/script/signup', function(req, res){
    res.sendFile(__dirname + '/scripts/signup.js')
})

app.get('/script/profile', function(req, res){
    res.sendFile(__dirname + '/scripts/profile.js')
})

app.get('/script/class', function(req, res){
    res.sendFile(__dirname + '/scripts/class.js')
})


http.Server(app).listen((process.env.PORT || 3000),function(){
    console.log('listening on *:3000')
})


