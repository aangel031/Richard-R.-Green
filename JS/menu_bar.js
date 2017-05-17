/*global $*/
$(document).ready(function(){
    //Menu
    $("#btn_menu").click(function (){
        if($("#btn_menu").hasClass('unclicked')){
            //Change the button icon to a back button
            $("#btn_menu").attr('src', 'Images/back_button.png');
            
            //Animate the body and menu to the right
            $('#menuBar').animate({
                left: '+=' + 305  
            }, 500);
            
            $('.mainBody').animate({
                left: '+=' + 250  
            }, 500);
            
            //Change the class of the button to make it toggle
            $("#btn_menu").removeClass('unclicked');
            $("#btn_menu").addClass('clicked');
            
           } else{
            //Same as above but in reverse
            $("#btn_menu").attr('src', 'Images/menu_button.png');
            
            $('#menuBar').animate({
                left: '-=' + 305  
            }, 500);
            
            $('.mainBody').animate({
                left: '-=' + 250  
            }, 500);
            
            $("#btn_menu").removeClass('clicked');
            $("#btn_menu").addClass('unclicked');
        }
    });
})