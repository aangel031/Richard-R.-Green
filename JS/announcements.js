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
    
    function getAnnouncements(){
        var announcements = rrgDB.database().ref('Announcement/');
        
        announcements.on('value', function(snapshot) {
          var data  = snapshot.val();
          var sortedAnnouncements = [];
          
          var dataKeys = Object.keys(data);
          
          
          
            // console.log(dataKeys);
          for(var i = 0; i <Object.keys(data).length; i++){
              var date = data[dataKeys[i]]["announcementDate"];
              var date = date.replace(",", "").replace(",", "");
              
              //Change date format to yyyymmdd
              var date = date.slice(4, 8) + date.slice(0, 4);
              
              data[dataKeys[i]]["announcementDate"] = date;
              
              sortedAnnouncements.push(data[dataKeys[i]])
          }
          
          //Sorts the data by date
          function compare(a,b) {
            if (a.announcementDate > b.announcementDate)
              return -1;
            if (a.announcementDate < b.announcementDate)
              return 1;
            return 0;
          }
          
          sortedAnnouncements.sort(compare);
          
          // console.log(sortedAnnouncements)
          
          $("#announcementsHolder").empty();
          
          for(var i = 0; i < Object.keys(sortedAnnouncements).length; i++){
            var template = $("#announcementTemplate").clone();
            
            var date = sortedAnnouncements[i]["announcementDate"];
            date = date.slice(4, 6) + "/" + date.slice(6, 8) + "/" + date.slice(0, 4);
            // date = date.replace("", "/");
            // date = date.replace("", "/");
            
            var templateTitle = template.find(".announcementTitle");
            templateTitle.text(sortedAnnouncements[i]["announcementTitle"]);
            
            templateTitle.addClass("col-sm-8 col-md-6 col-lg-8");
            
            var templateContent = template.find(".announcementContent");
            templateContent.text(sortedAnnouncements[i]["announcementContent"]);
            
            var templateDate = template.find(".announcementDate")
            templateDate.text(date);
            
            templateDate.addClass("col-sm-4 col-md-6 col-lg-4")
            
            template.find("#announcementContainer").addClass("card col-md-12")
            template.removeAttr("id", "announcementTemplate");
            template.addClass("col-lg-4 col-md-6 col-sm-12 container");
            
            $("#announcementsHolder").append(template);
          
            // console.log(container);
          }
        });
    } 
    
    getAnnouncements();
})