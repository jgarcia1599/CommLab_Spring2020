

$(document).ready(function(){
    AOS.init();
    const height = window.scrollY;
    console.log(height);
//To hide uncomment below: 
// $('.scroll-section-main').hide();
$('.scroll-section').hide();
$('#welcome_message').hide()
    var form_responses = []
$('#input_form').submit(function(e) {

    e.preventDefault(); // cancel the actual submit
    console.log("u submitted")
    var form= $(this).serialize();
    var form_elements = form.split("&");
    for(var i = 0; i<form_elements.length;i++){
        var answer = form_elements[i].split("=");
        // console.log(answer[1]);
        var final_answer = answer[1].replace(/%20/g," ");
        console.log(final_answer);
        form_responses.push(final_answer);
    }
    console.log(form_responses)
    $('#input_form').hide();
    $('#welcome_message').fadeIn();
    $('.scroll-section').show();
    $('#image_text_1').text(form_responses[1]);
    $('#image_text_2').text(form_responses[2]);
    $('#image_text_3').text(form_responses[3]);
    $('#image_text_4').text(form_responses[0]);
    $('#image_text_5').text(form_responses[2]);

  });

  $("#new_confessions").click(function(){
    location.reload(true);
  })




})


  