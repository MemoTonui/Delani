
function validate(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;

    if(name == "" || email=="" || comments==" "){
        alert("Kindly fill in all inputs if you want to contact us.");
    }
    else{
        alert("Thank you for contacting us. Your response has been received.We will get back to you in a few.");
    }
}
$(document).ready(function(){
   $("#image1").click(function(){
        $(this).hide();
        $(".imageContent").hide();
        $("#imageContent1").toggle();
   });
   $("#image2").click(function(){
        $(this).hide();
        $(".imageContent").hide();
        $("#imageContent2").toggle();
});
    $("#image3").click(function(){
        $(this).hide();
        $(".imageContent").hide();
        $("#imageContent3").toggle();
});

  /*CONTACT US*/
  $('#send').click(function(){
      validate();
     
  });  
});

