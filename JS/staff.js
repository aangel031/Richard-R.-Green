/*global $*/
$(document).ready(function (){
    $("#menuUploadAnnouncement").click(function(){
        $("#calendarUploadHolder").animate({opacity: 0});
        $("#calendarUploadHolder").css("display", "none");
        
        $("#announcementUploadHolder").css("display", "block");
        $("#announcementUploadHolder").animate({opacity: 1});
    });
    $("#menuUploadEvent").click(function(){
        $("#announcementUploadHolder").animate({opacity: 0});
        $("#announcementUploadHolder").css("display", "none");
        
        $("#calendarUploadHolder").css("display", "block");
        $("#calendarUploadHolder").animate({opacity: 1});
    })
})