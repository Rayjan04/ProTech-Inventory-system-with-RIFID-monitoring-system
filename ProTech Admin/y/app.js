function Login(){
   event.preventDefault()
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

    window.alert(errorMessage,errorCode);
    });
    
  
}
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = 'Admin.html'
  } else {
    // No user is signed in.
  }
});



