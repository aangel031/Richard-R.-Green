/*global $*/
$(document).ready(function (){
    $("#menuUploadAnnouncement").click(function(){
        $("#calendarUploadHolder").animate({opacity: 0});
        $("#calendarUploadHolder").css("display", "none");
        
        $("#announcementUploadHolder").css("display", "block");
        $("#announcementUploadHolder").animate({opacity: 1});
        
        //Animates Menu 
        $('#menuBar').animate({
                left: '-=' + 305  
            }, 500);
            
            $('.mainBody').animate({
                left: '-=' + 250  
            }, 500);
        $("#btn_menu").removeClass('clicked');
        $("#btn_menu").addClass('unclicked');
        
        $("#btn_menu").attr('src', 'Images/menu_button.png');
    });
    $("#menuUploadEvent").click(function(){
        $("#announcementUploadHolder").animate({opacity: 0});
        $("#announcementUploadHolder").css("display", "none");
        
        $("#calendarUploadHolder").css("display", "block");
        $("#calendarUploadHolder").animate({opacity: 1});
        
        $('#menuBar').animate({
                left: '-=' + 305  
            }, 500);
            
            $('.mainBody').animate({
                left: '-=' + 250  
            }, 500);
        $("#btn_menu").removeClass('clicked');
        $("#btn_menu").addClass('unclicked');
        
        $("#btn_menu").attr('src', 'Images/menu_button.png');
    })
})