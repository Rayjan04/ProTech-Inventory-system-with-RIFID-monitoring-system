
function time() {

    //time
    var  clock = new Date();
     var hours = clock.getHours();
     var minutes = clock.getMinutes();
     var AmPm = (hours < 12) ? "AM" : "PM";
     hours = (hours > 12) ? hours - 12 : hours;
     hours = ("0" + hours).slice(-2);
     minutes = ("0" + minutes).slice(-2);
   //Date
     var today = new Date();
     month = today.getMonth();
     year = today.getFullYear();
     date = today.getDate();

     month = month +1;
     monthA =  ("0" + month).slice(-2);
     date =   ("0" + date).slice(-2);

     var months = ["Jan", "Feb", "Mar", "Apr", "May", "jun","jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    
     Time = document.getElementById("Time").innerHTML = months[month]+" "+ date +", "+ year+" "+" " + hours + ":" + minutes + " " + AmPm;
     notification =  month +"/"+ date +"/"+ year;
}

setInterval(time, 200);