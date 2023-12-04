const nombre = document.querySelector('#nombre')
const correo= document.querySelector('#correo')
const mensaje= document.querySelector('#mensaje')
const btnAgregar = document.querySelector('#btn_agregar')

btnAgregar.addEventListener('click', function(){
    window.location.href= `agregar/${nombre.value}/${correo.value}/${mensaje.value}`
})