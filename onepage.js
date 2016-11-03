$(document).ready(function(){
  /*Says don't run code until document ready. Put all code here*/

  $(".menu-icon").click(function(){
      $("navbar").slideToggle();


    });
    //fix the bug where the bug goes away. Handle another event//
    $(window).resize(function(){
        //When page is bigger than 768px remove style attribute//

          var widthc = $(window).width();

          if( width > 768) {
            //remove style attribute here//
              $("nav").removeAttr("style");
          }
    });

});