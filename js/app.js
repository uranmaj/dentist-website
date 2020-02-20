// Add smooth scrolling to all links
$(document).ready(function(){
    $(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
  
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
  

        window.location.hash = hash;
        });
      } 
    });

  })