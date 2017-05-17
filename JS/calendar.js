/*global $*/
$(document).ready(function(){
    // var config = {
    //     apiKey: "AIzaSyACxgQ49HYEyZ78BqtzaD0Jnbh0jPp9c80",
    //     authDomain: "rrg-db.firebaseapp.com",
    //     databaseURL: "https://rrg-db.firebaseio.com",
    //     projectId: "rrg-db",
    //     storageBucket: "rrg-db.appspot.com",
    //     messagingSenderId: "239630721959"
    // };
   
    var rrgDB = firebase.initializeApp(config);
    
    function getEvents(){
        var events = rrgDB.database().ref('Events/');
        
        events.on('value', function(snapshot) {
          var data  = snapshot.val();
          var dataKeys = Object.keys(data);
          var sortedEvents = [];
          
          for(var i = 0; i <Object.keys(data).length; i++){
              var date = data[dataKeys[i]]["dateOfEvent"];
              var date = date.replace(",", "").replace(",", "");
              
              //Change date format to yyyy/mm/dd
              var date = date.slice(4, 8) + date.slice(0, 4);
              
              data[dataKeys[i]]["dateOfEvent"] = date;
              
              sortedEvents.push(data[dataKeys[i]])
          }
          
          //Sorts the data by date
          function compare(a,b) {
            if (a.dateOfEvent > b.dateOfEvent)
              return -1;
            if (a.dateOfEvent < b.dateOfEvent)
              return 1;
            return 0;
          }
          
          sortedEvents.sort(compare);
          
          $("#eventsTable").find("tbody").empty();
          
          for(var i = 0; i < Object.keys(sortedEvents).length; i++){
              console.log(sortedEvents[i]["dateOfEvent"]);
            var date = sortedEvents[i]["dateOfEvent"];
            date = date.slice(4, 6) + "/" + date.slice(6, 8) + "/" + date.slice(0, 4);
            
            var template = "<tr><td class='eventDate'>" + date + "</td><td class='eventTitle'>" + sortedEvents[i]["titleOfEvent"] + "</td><td class='eventDesc'>" + sortedEvents[i]["descOfEvent"] + "</td>";
            
            $("#eventsTable").find("tbody").append(template);
          }
        })
    }
    
    getEvents();
});