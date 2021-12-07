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

              if(snapshot.exists()){
                 var  Rolex = snapshot.val().Role;
                 var  Status = snapshot.val().Status;

                 if(Rolex == "Admin" && Status == "Active"){
                  database.ref('Account/' + user).update({
                    Password : pass,
                   })
                  window.location.href = "Admin.html";
               
                }
                if(Rolex == "Custodian" && Status == "Active"){
                  database.ref('Account/' + user).update({
                    Password : pass,
                   })
                  window.location.href = "public/Dashboard.html"; 
  
                }
                if(Status == "Disabled"){
                  alert("The user account has been disabled by an administrator.")
                }
              }
             
             else{
              alert("There is no user record corresponding to this identifier. The user has been deleted by an administrator.")
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


