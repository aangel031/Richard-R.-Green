/*global $*/

$(document).ready(function (){  
    // Initialize Firebase
    // var config = {
    //     apiKey: "AIzaSyACxgQ49HYEyZ78BqtzaD0Jnbh0jPp9c80",
    //     authDomain: "rrg-db.firebaseapp.com",
    //     databaseURL: "https://rrg-db.firebaseio.com",
    //     projectId: "rrg-db",
    //     storageBucket: "rrg-db.appspot.com",
    //     messagingSenderId: "239630721959"
    // };
   
   
   
   //Uploads announcement data to database
    function uploadAnnouncement(title, announcement, date){
        /**Uploads the data to the database 
        Saved on the database under Announcement/title + date (Title and Date used to avoid data being overwritten)**/
        rrgDB.database().ref('Announcement/' + title + " " + date).set({
            announcementTitle: title,
            announcementContent: announcement,
            announcementDate: date
        });
        
        //Animates loading screens
        $(".fa-spinner").animate({
            opacity: 0
        }, 100);
        
        setTimeout(function(){
            $(".fa-check-circle-o").animate({
                opacity: 1
            }, 500);
            
            $("contentType").text("Announcement")
            $("#btnReSubmit").css('display', 'block');
            
            $("#btnReSubmit").animate({
                opacity: 1
            }, 500);
        }, 500)
    }
    
    //Uploads event/calendar data to firebase(database)
    function uploadEvent(eventTitle, eventDate, eventDescription){
        /**Uploads the data to the database 
        Saved on the database under Announcement/title + date (Title and Date used to avoid data being overwritten)**/
        rrgDB.database().ref('Events/' + eventTitle + " " + eventDate).set({
            titleOfEvent: eventTitle,
            descOfEvent: eventDescription,
            dateOfEvent: eventDate
        });
        
        //Animates loading screens
        $(".fa-spinner").animate({
            opacity: 0
        }, 100);
        
        setTimeout(function(){
            $(".fa-check-circle-o").animate({
                opacity: 1
            }, 500);
            
            $("#btnReSubmitEvent").css('display', 'block');
            $("#btnReSubmitEvent").animate({
                opacity: 1
            }, 500);
        }, 500)
    }
    
    //Handles the data upload by organizing the data and avoiding blank data
    $("#btnSubmit").click(function (){
        //Checks to see if user has logged in
        if($("#btnSubmit").hasClass('u') != true){
            alert("Logged In");
            var newAnnouncementTitle = $("#announcementTitle").val();
        
            //replaces "/"" with "," to avoid creating folder in Firebase Database
            var newAnnouncementDate =  $("#announcementDate").val().replace("/", ",").replace("/", ",");
            var newAnnouncementContent = $("#announcementContent").val();
            
            //Checks to see if the inputs aren't empty
            if(newAnnouncementTitle != "" && newAnnouncementDate != "" && newAnnouncementContent !=""){
                $("#announcementHolder").animate({
                opacity: 0
                }, 500);
                
                $("#announcementHolder").css('display', 'none');
                
                $(".fa-spinner").animate({
                    opacity: 1
                }, 500);
                
                uploadAnnouncement(newAnnouncementTitle, newAnnouncementContent, newAnnouncementDate);
                
            } else if(newAnnouncementTitle == "" && newAnnouncementContent == "" ){
                $("#announcementTitle").css('color', 'red');
                $("#announcementContent").css('color', 'red');
                
                $('#announcementTitle').bind('input propertychange', function() {
                  $("#announcementTitle").css('color', '');
                });
                
                $('#announcementContent').bind('input propertychange', function() {
                  $("#announcementContent").css('color', '');
                });
                
            } else if(newAnnouncementTitle == ""){
                $("#announcementTitle").css('color', 'red');
                
                $('#announcementTitle').bind('input propertychange', function() {
                  $("#announcementTitle").css('color', '');
                });
                
            } else if(newAnnouncementContent == ""){
                $("#announcementContent").css('color', 'red');
                
                $('#announcementContent').bind('input propertychange', function() {
                  $("#announcementContent").css('color', '');
                });
            }
            
            if(newAnnouncementDate == ""){
                $("#announcementDate").animate({
                    boxShadow: '0px 0px 2.5px rgb(255, 35, 50)'
                }, 100)
            }
        } else{
            alert("Login");
        }
    })
    
    //Handles the data upload by organizing the data and avoiding blank data
    $("#btnEventSubmit").click(function (){
        var newEventTitle = $("#eventTitle").val();
        
        //replaces "/"" with "," to avoid creating folder in Firebase Database
        var newEventDate =  $("#eventDate").val().replace("/", ",").replace("/", ",");
        var newEventDesc = $("#eventDescription").val();
        
        //Checks to see if the inputs aren't empty
        if(newEventTitle != "" && newEventDate != "" && newEventDesc !=""){
            $("#eventHolder").animate({
            opacity: 0
            }, 500);
            
            $("#eventHolder").css('display', 'none');
            
            $(".fa-spinner").animate({
                opacity: 1
            }, 500);
            
            uploadEvent(newEventTitle, newEventDate, newEventDesc);
            
        } else if(newEventTitle == "" && newEventDesc == "" ){
            $("#eventTitle").css('color', 'red');
            $("#eventDescription").css('color', 'red');
            
            $('#eventTitle').bind('input propertychange', function() {
               $("#eventTitle").css('color', '');
            });
            
            $('#eventDescription').bind('input propertychange', function() {
               $("#eventDescription").css('color', '');
            });
            
        } else if(newEventTitle == ""){
            $("#eventTitle").css('color', 'red');
            
            $('#eventTitle').bind('input propertychange', function() {
               $("#eventTitle").css('color', '');
            });
            
        } else if(newEventDesc == ""){
            $("#eventDescription").css('color', 'red');
            
            $('#eventDescription').bind('input propertychange', function() {
               $("#eventDescription").css('color', '');
            });
        }
        
        if(newEventDate == ""){
            $("#eventDate").animate({
                boxShadow: '0px 0px 2.5px rgb(255, 35, 50)'
            }, 100)
        }
    })
    
    
    
    //Handles "Upload Another Announcement" Button
    //^Avoids page being reloaded
    $("#btnReSubmit").click(function(){
        $("#announcementTitle").val("");
        $("#announcementDate").val("");
        $("#announcementContent").val("");
        
        $(".fa-check-circle-o").animate({
            opacity: 0
        }, 500);
        
        $("#btnReSubmit").animate({
            opacity: 0
        }, 500);
        
        $("#announcementHolder").css('display', 'block');
        
        $("#announcementHolder").animate({
            opacity: 1
        }, 500);
    })
    
    //Handles "Upload Another Announcement" Button
    //^Avoids page being reloaded
    $("#btnReSubmitEvent").click(function(){
        $("#eventTitle").val("");
        $("#eventDate").val("");
        $("#eventDescription").val("");
        
        $(".fa-check-circle-o").animate({
            opacity: 0
        }, 500);
        
        $("#btnReSubmitEvent").animate({
            opacity: 0
        }, 500);
        
        $("#eventHolder").css('display', 'block');
        
        $("#eventHolder").animate({
            opacity: 1
        }, 500);
    })
    
    $("#announcementDate").click(function() {
        $("#announcementDate").css('box-shadow', '')
    })
})