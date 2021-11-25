function Login(){
   event.preventDefault()
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {

      // Signed in
      window.location.href = "Admin.html";
   

   
     
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

    window.alert(errorMessage,errorCode);
    });
    
  
}
  var  Fname;
  var  Lname;
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

     
  } else {
    // No user is signed in.
  }
});



