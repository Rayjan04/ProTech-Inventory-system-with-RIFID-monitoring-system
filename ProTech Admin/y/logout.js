var firebaseConfig = {
  apiKey: "AIzaSyC5HqUCIRL8XB5X-IGLYg9RiuWCbtiErpY",
  authDomain: "protech-project-aef56.firebaseapp.com",
  projectId: "protech-project-aef56",
  storageBucket: "protech-project-aef56.appspot.com",
  messagingSenderId: "611528722799",
  appId: "1:611528722799:web:814c92195220387825009a",
  measurementId: "G-9B3L95C56G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//Data ready



function logout()
{
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });


}
firebase.auth().onAuthStateChanged(function(user) {
    var Not =document.getElementById("not-login")
    var yes =document.getElementById("login")
    if (user) {
    
    }
     else {
       window.location.href ="index.html";
   
    }
  });

  function run() {
    document.getElementById("status").value = document.getElementById("Ultra").value;
    
}