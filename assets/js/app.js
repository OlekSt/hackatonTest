$ ( document ).on ( "click", ".image", function () {
   
   var content_div = $(this).data('content_number');
   
   $('.content_'+content_div).toggleClass('d-none')
   
   
});

function create_keyboard (  ) {
   
   var alphabhed = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','&nbsp;&nbsp;&nbsp;'];
   $.each(alphabhed, function(key,value)
   {
      
      $('#keyboard').append(`<span class="img-thumbnail alphabet_letter" data-letter="${value}">${value}</span>`);
      if(key === 9) $('#keyboard').append(`<br/><br/>`);
      if(key === 18) $('#keyboard').append(`<br/><br/>`);
   });
   $('#keyboard').append(`<span class="img-thumbnail alphabet_letter" id="clear">clear</span>`);
   
}
create_keyboard();
$ ( document ).on ( "click", ".alphabet_letter", function () {
   
   var letter = $(this).data('letter');
   
   $('#screen').append(`<span class="img-thumbnail " >${letter}</span>`);
   
   
});
$ ( document ).on ( "click", "#clear", function () {
   
   $('#screen').html('');
});

// testing merge status
