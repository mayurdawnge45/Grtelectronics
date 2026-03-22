$(document).ready(function(){

  $('.modal_click').click(function(){
    $('.popup-overlay').fadeIn(200);
    setTimeout(function(){
      $('.popup-box').addClass('active');
    }, 10);
  });

  $('.close-popup, .popup-overlay').click(function(e){
    if(e.target !== this) return;

    $('.popup-box').removeClass('active');
    setTimeout(function(){
      $('.popup-overlay').fadeOut(200);
    }, 200);
  });

    

});