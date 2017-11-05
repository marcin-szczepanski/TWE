$(document).on('click', '.scroll-link', function(event){
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);

  document.location.hash = $.attr(this, 'href');
});
