var form_responses = []

$('.text-block').hide()
$('#input_form').on("submit",function(e) {
    e.preventDefault(); // cancel the actual submit

    var form= $(this).serialize();
    var form_elements = form.split("&");
    for(var i = 0; i<form_elements.length;i++){
        var answer = form_elements[i].split("=");
        console.log(answer[1]);
        var final_answer = answer[1].replace(/%20/g," ");
        console.log(final_answer);
        form_responses.push(final_answer);
    }
    console.log($('.text-block p').text)
    $('.text-block p').text(form_responses[0]);
    $('.text-block').show()
  });

  