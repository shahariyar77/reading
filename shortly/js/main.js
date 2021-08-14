$(document).ready(function(){
    
  $(".testmonial-slide").owlCarousel({
  loop:true,
  nav:true,
  dots:false,
  margin: 30,
  autoplay: false,
  navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
}
});



$(".header-bar").on("click", function(){
  $(".offcanvas-manu, .offcanvas-overylay").addClass("active");  
});


$(".manu-close, .offcanvas-overylay").on("click", function(){
  $(".offcanvas-manu, .offcanvas-overylay").removeClass("active");  
});


    
});