function Login(){
   event.preventDefault()
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      // Signed in
      var database = firebase.database()
      var user = userCredential.user.uid;

            database.ref('Account/'+ user).on('value',function(snapshot){
              var  Rolex = snapshot.val().Role;
      
              if(Rolex == "Admin"){
                window.location.href = "Admin.html";
              }
              if(Rolex == "Custodian"){
                window.location.href = "public/Dashboard.html";
              
              
              }
         });


   

   
     
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

    window.alert(errorMessage,errorCode);
    });
    
  
}
/*
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // user login 



  } else {
    // No user is signed in.
 
  }
});
*/


