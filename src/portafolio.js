//Redireccionamiento de proyectos

function redirigir(nombreProyecto) {
    var proyectosGit = {
        proyecto1: 'https://github.com/Enzoreinoso9/PaginaWebBucles',
        proyecto2: 'https://github.com/Enzoreinoso9/Login-App',
        proyecto3: 'https://github.com/Enzoreinoso9/Lista-Alumnos',
        proyecto4: 'https://github.com/Enzoreinoso9/Prototipo-Cajero',
        proyecto5: 'https://github.com/Enzoreinoso9/Calculo-Figuras',
        proyecto6: 'https://github.com/Enzoreinoso9/Sistema-de-Apps',
    };

    var urlGit = proyectosGit[nombreProyecto];

    window.location.href = urlGit;
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