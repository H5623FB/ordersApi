var firebase = require("firebase");

// Initialize Firebase

var firebaseConfig = {
  apiKey: "AIzaSyB18KH-sOZtV0f2K-zOXEHjwDYp6oy85zA",
  authDomain: "ordersproj.firebaseapp.com",
  databaseURL: "https://ordersproj.firebaseio.com",
  projectId: "ordersproj",
  storageBucket: "",
  messagingSenderId: "600974893569",
  appId: "1:600974893569:web:d0bf47a8796318ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
