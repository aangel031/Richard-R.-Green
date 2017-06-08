/*global $*/
$(document).ready(function(){
    //authIndex = User Index
    var authIndex = rrgDB.database().ref('authIndex/');
     
    function authLogin(usrname, pass){
        var announcements = rrgDB.database().ref('authIndex/');
        
        announcements.on('value', function(snapshot) {
          var data  = snapshot.val();
          var sortedAnnouncements = [];
          
          var dataKeys = Object.keys(data);
          
          for(var i = 0; i < Object.keys(data).length; i++){
              if(data[dataKeys[i]]["logon"] == usrname && data[dataKeys[i]]["pass"] == pass){
                $("#loginPadding").css("display", "none");
                $("#uploadBody").css("opacity", "1");
                
                $("#announcementTitle").removeAttr("disabled");
                $("#announcementDate").removeAttr("disabled")
                $("#announcementContent").removeAttr("disabled")
                
                $("#eventTitle").removeAttr("disabled");
                $("#eventDate").removeAttr("disabled");
                $("#eventDescription").removeAttr("disabled");
                
                $("#btnSubmit").removeAttr("disabled");
              } else{
                  $("#txtUsrname").css("border-bottom", "1px solid red");
                  $("#txtPass").css("border-bottom", "1px solid red");
                  
                  $("#txtUsrname").val("");
                  $("#txtPass").val("");
              }
          }
        })
    }
        authIndex.on('value', function(snapshot) {
          var data  = snapshot.val();
          
          
        })
        
    $("#btnLogin").click(function(){
        var userName = $("#txtUsrname").val();
        var userPass = $("#txtPass").val();
        
        authLogin(userName, userPass);
    })
})