
function validate(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;

    if(name == "" || email=="" || comments==""){
        alert("Kindly fill in all inputs if you want to contact us.");
    }
    else{
        alert("Thank you for contacting us. Your response has been received.We will get back to you in a few.");
    }
}
$(document).ready(function(){
   $("#image1").click(function(){
        $(this).fadeOut();
        
        $("#imageContent1").fadeIn();
   });
   $('#imageContent1').click(function(){
       $(this).fadeOut();
       $('#image1').fadeIn();
   });
   $("#image2").click(function(){
        $(this).fadeOut();
    
        $("#imageContent2").fadeIn();
});
$('#imageContent2').click(function(){
    $(this).fadeOut();
    $('#image2').fadeIn();
});

    $("#image3").click(function(){
        $(this).fadeOut();
        
        $("#imageContent3").fadeIn();
});
$('#imageContent3').click(function(){
    $(this).fadeOut();
    $('#image3').fadeIn();
})
/*PORTFOLIO*/
  $('#work1').hover(function(){
      $(this).animate({
          opacity:'toggle',
          position:'relative'
      })
      $('#head1').show();
  });
  $('#work2').hover(function(){
    $(this).animate({
        opacity:'toggle',
        position:'relative'
    })
    $('#head1').show();
});
$('#work3').hover(function(){
    $(this).animate({
        opacity:'toggle',
        position:'relative'
    })
    $('#head1').show();
});
$('#work4').hover(function(){
    $(this).animate({
        opacity:'toggle',
        position:'relative'
    })
    $('#head1').show();
});
$('#work5').hover(function(){
    $(this).animate({
        opacity:'toggle',
        position:'relative'
    })
    $('#head1').show();
});
$('#work6').hover(function(){
    $(this).animate({
        opacity:'toggle',
        position:'relative'
    })
    $('#head1').show();
});
$('#work7').hover(function(){
    $(this).animate({
        opacity:'toggle',
        position:'relative'
    })
    $('#head1').show();
});
$('#work8').hover(function(){
    $(this).zoomIn();
    $('#head1').show();
});

  /*CONTACT US*/
  $('#send').click(function(){
      validate();
     
  });  
});

