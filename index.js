import express from 'express' //Importamos express
import {conectar, agregarContacto} from './src/mysql_conector.js'

const app = express() //Iniciamos express

//Iniciamos el servidos
app.listen('3000',function(){
    console.log('aplicacion iniciada en el puerto 3000')
})

//Configuramos el pug
app.set('views', './vistas')
app.set('view engine', 'pug')

//configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))


app.get('/', function(req, res) {
    /*res.send('aplicacion iniciada todo va bien')*/
    res.render('index', {titulo:'Aplicacion de contactos', dato:'cualquier texto'})
})

app.get('/agregar/:nombre/:correo/:mensaje', function(req, res) {
    let nombre = req.params.nombre
    let correo = req.params.correo
    let mensaje = req.params.mensaje
    agregarContacto(nombre, correo, mensaje)
    res.redirect('/')
    
    console.log(nombre, correo, mensaje)
}) 