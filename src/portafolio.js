function redireccionar(proyecto) {
    window.location.href = `/vistas/projects/${proyecto}.html`;
}


//Mensajes Enviados
function guardarDatos() {

    var nombre = document.getElementById('name').value;
    var correo = document.getElementById('email').value;
    var mensaje = document.getElementById('message').value;

    var datos = {

        "nombre": nombre,
        "correo": correo,
        "mensaje": mensaje
    };

    var datosJSON = JSON.stringify(datos);
    console.log(datosJSON); 

}


//Modo Nocturno
document.addEventListener('DOMContentLoaded', function () {
    const modoNocturnoToggle = document.getElementById('modoNocturnoToggle');
    const body = document.body;

    modoNocturnoToggle.addEventListener('change', function () {
        body.classList.toggle('modo-nocturno', modoNocturnoToggle.checked);
    });
});