/*******************************************\
Section Animation
\*******************************************/

$(document).ready(function(){

  $('.nav-a').click(function(){
    var sect = $(this).attr('href');
    $('.current').addClass('hide').removeClass('current');
    $(sect).removeClass('hide').addClass('current');

  });
  
/*******************************************\
Menu
\*******************************************/

  $('.menu-link').click(function(){
    $(this).toggleClass('menu-link--active');           
    $('nav').toggleClass('nav--active');

  });

  $('.nav-a').click(function(){
    $("nav").removeClass('nav--active');
    $(".menu-link").removeClass('menu-link--active');
        
  });   

/*******************************************\
Form - In Progress
\*******************************************/


// $("#contactForm").on("submit", function(){

//     $('.current').addClass('hide').removeClass('current');
//     $('#sent').removeClass('hide').addClass('current');

//     $.post("form.php", function(){
 
//     )}	
  
//     return false;

//   })

})
