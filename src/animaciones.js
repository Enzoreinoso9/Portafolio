
$(function() { 


    //Moviemiento del enlace
        $(".enlaceSection").click(function(){
    
            var redireccion = $(this).data("seccion");
    
            var posicion = $(`.${redireccion}`).offset().top;
    
            $("html, body").animate({scrollTop: posicion}, 1000);
    
        });
    
    
        //Mensaje Contacto
    $(".boton").click(function (){
    
    
        var nombre = $("#name").val();
            var correo = $("#email").val();
            var mensaje = $("#message").val();
            
            if (nombre !== '' && correo !== '' && mensaje !== '') {
                alert("Mensaje Enviado");
            } else {
                alert("Por favor completa todos los campos.");
            }
    
    });
    
    });
    
    
    
    
    
    