var database = firebase.database()

function SelectAllData(){
  database.ref('Deleted_Manufacture').once('value',
  function(AllRecord){
    AllRecord.forEach(
      function(CurrentRecord){
        var name = CurrentRecord.val().Name;
        var comapany = CurrentRecord.val().Company_Name;
        var address = CurrentRecord.val().Company_Address;
         var position = CurrentRecord.val().Company_Position;
        var number = CurrentRecord.val().Contact_Number;
        var email = CurrentRecord.val().Email;
        
        
        
        AddItemsToTable(name,comapany,address,position,number,email);
      }
    );
  });
}
window.onload = SelectAllData;
var batchNumber = 0
function AddItemsToTable(name,comapany,address,position,number,email){
 var tbody = document.getElementById('tbody');
 var trow = document.createElement('tr');
 var td1 = document.createElement('td');
 var td2 = document.createElement('td');
 var td3 = document.createElement('td');
 var td4 = document.createElement('td');
 var td5 = document.createElement('td');
 var td6 = document.createElement('td');
 var td7 = document.createElement('td');
 var td8 = document.createElement('td');


 td1.innerHTML = ++ batchNumber;
 td2.innerHTML = name;
 td3.innerHTML = comapany;
 td4.innerHTML = address;
 td5.innerHTML = position;
 td6.innerHTML = number;
 td7.innerHTML = email;
 td8.innerHTML = '<button  onclick="Restore()"  class="btn btn-success">Restore</button>';

 
 
  trow.appendChild(td1);trow.appendChild(td2);trow.appendChild(td3);trow.appendChild(td4);trow.appendChild(td5);trow.appendChild(td6);trow.appendChild(td7);trow.appendChild(td8);
  tbody.appendChild(trow);
}