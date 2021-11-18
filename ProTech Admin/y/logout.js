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


       


      

//for notification for admin

//setTimeout(function(){
  function openNoti(){
 //   setTimeout(function(){
    
//  },5000)

 // vehi_list = '<a href="Product.html" class="dropdown-item"> <strong>Alert</strong> <span class="right badge badge-danger float-right">New</span> <br>  Item expired  <span class="float-right text-muted text-sm"> </span></a>';
//  $('#ShowNotification').append(vehi_list);
var database = firebase.database();
database.ref('Notification/Admin').once('value', function(snapshot){
   if(snapshot.exists()){
      var vehi_list = '';
         snapshot.forEach(function(data){
            var val = data.val();
            
            document.getElementById("NotificationNumB").innerHTML = " New Notification";
            vehi_list += '<a href="Add_product.html" class="dropdown-item"> <strong>'+ val.Action+'</strong> <span class="right badge badge-danger float-right">New</span> <br>  '+ val.name+' '+ val.item+'<span class="float-right text-muted text-sm"> '+ val.Date+'</span></a> <div class="dropdown-divider"></div>';
         });
             $('#Refresh').remove();
             $('#ListNotification').append('<div id="Refresh"> </div>');
             $('#Refresh').append(vehi_list);
           
}
});
  }
//},5000)