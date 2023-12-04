//import mysql
import mysql from 'mysql'

//crear la conexion
const conector = mysql.createConnection({

    host: 'localhost',
    user: 'enzoreinoso9',
    password: '1999',
    database: 'agenda_contactos'
})

const conectar = () => {
    conector.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}


const agregarContacto = (nombre, correo, mensaje) => {
    const sql = `INSERT INTO agenda (id_agenda, nombre, correo, mensaje) VALUES (${null}, '${nombre}', '${correo}', '${mensaje}')`
    conector.query(sql, function(err, result, filed) {
        if(err) throw err
        console.log(result)
    })
}

export {conectar, agregarContacto}