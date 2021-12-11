$(document).ready(function(){
    $("#contact-form").validate({
        event: "blur",rules: {"name": "required","email": "required email","message": "required"},
        messages: {'name': "Por favor indica tu nombre",'email': "Por favor, indica una direcci&oacute;n de e-mail v&aacute;lida","message": "Por favor, di algo!"},
        debug: true,errorElement: "label",
        submitHandler: function(form){
            $("#alert").show();
            setTimeout(function() {
                $('#alert').fadeOut('slow');
            }, 5000);
            $.ajax({
                type: "POST",
                url:"send.php",
                data: "name="+escape($('#name').val())+"&email="+escape($('#email').val())+"&message="+escape($('#message').val()),
                success: function(msg){
                    $("#alert").html(msg);
                    document.getElementById("name").value="";
                    document.getElementById("email").value="";
                    document.getElementById("message").value="";
                    setTimeout(function() {
                        $('#alert').fadeOut('slow');
                    }, 5000);
                }
            });
        }
    });
});