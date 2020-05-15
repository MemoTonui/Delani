
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
$("#work1").mouseover(function(){
    $("#head1").show();
  }).mouseout(function(){
    $("#head1").hide();
  });
  $("#work2").mouseover(function(){
    $("#head2").show();
  }).mouseout(function(){
    $("#head2").hide();
  });

  $("#work3").mouseover(function(){
    $("#head3").show();
  }).mouseout(function(){
    $("#head3").hide();
  });


  $("#work4").mouseover(function(){
    $("#head4").show();
  }).mouseout(function(){
    $("#head4").hide();
  });
$("#work5").mouseover(function(){
    $("#head5").show();
  }).mouseout(function(){
    $("#head5").hide();
  });
  $("#work6").mouseover(function(){
    $("#head6").show();
  }).mouseout(function(){
    $("#head6").hide();
  });
  $("#work7").mouseover(function(){
    $("#head7").show();
  }).mouseout(function(){
    $("#head7").hide();
  });
  $("#work8").mouseover(function(){
    $("#head8").show();
  }).mouseout(function(){
    $("#head8").hide();
  });

  /*CONTACT US*/
  $('#send').click(function(){
      validate();
     
  });  
});

