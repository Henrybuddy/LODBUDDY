$( document ).ready(function() { 


  //*** Header js
  $(window).scroll(function() { 
    if ($(window).scrollTop() > 50) {
      $('header.land-header').addClass('sticky');
    } else {
      $('header.land-header').removeClass('sticky');
    }
  });
  $(document).on("click",'.menu-action',function(){    
    $('.menu-list').toggleClass('open');  
    $('.cdx-layer').toggleClass("open");
    $(this).toggleClass("toggle-active")
  });
  if($(window).width() < 992){
    $(".submenu-list,.secodnmenu-list").slideUp('');
    $(".menu-list li.menu-item > a" ).on( "click", function() {      
      $(this).parents('.menu-list').find(".submenu-list").slideUp('');  
      $(this).parents('.menu-list').find(".secodnmenu-list").slideUp('');                
      if($(this).next(".submenu-list").is(':hidden')){
        $(this).next(".submenu-list").slideToggle('');  
      }                
    });
    $(".menu-list li.sub-menu-item > a" ).on( "click", function() {      
      $(this).parents('.menu-list').find(".secodnmenu-list").slideUp('');         
      if($(this).next(".secodnmenu-list").is(':hidden')){
        $(this).next(".secodnmenu-list").slideToggle('');  
      }                
    });  

    $(document).on("click",'.cdx-layer',function(){    
      $(".menu-list").removeClass("open");
      $(this).removeClass("open");
      $('.menu-action').removeClass("toggle-active");
    });   
  }

  //*** Back To Top
  $(window).scroll(function() {
    if ($(window).scrollTop() > 450) {
      $('.scroll-top').addClass('show');
    } else {
      $('.scroll-top').removeClass('show');
    } 
  });
  $(document).ready(function(){
    $(document).on("click",'.scroll-top',function(){    
      $('html, body').animate({scrollTop:0}, '450');
    });
  });



});

  

$(document).on("click", function(event){
  //***Action Menu
  var $trigger = $(".menu-action,.menu-list");
  if($trigger !== event.target && !$trigger.has(event.target).length){        
    $(".menu-list").removeClass("open");        
  }          
});  