//Initialize firebase

var config = {
    apiKey: "AIzaSyAPyWvrEi0Z7E3Rxj-6mkqT-pJFLwE8chY",
    authDomain: "tic-tac-toe-d277a.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-d277a.firebaseio.com",
    projectId: "tic-tac-toe-d277a",
    storageBucket: "",
    messagingSenderId: "672237597936"
  };
  firebase.initializeApp(config);

  var ticTacToe = {
  	localP: null,
  	p1: null,
  	p2: null,

  	gameBoard: [null, null, null, null, null, null, null, null, null]

  }