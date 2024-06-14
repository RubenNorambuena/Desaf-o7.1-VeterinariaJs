const fs = require('fs')
const { type } = require('os')
function registrar(nombre, edad, tipo, color, enfermedad) {

    const cita = { nombre: nombre, edad: edad, tipo: tipo, color: color, enfermedad: enfermedad }
    const citas=fs.readFileSync('citas.json','utf8')
    const JSONcitas = JSON.parse(citas)
    if (JSONcitas.length === 0){
        fs.writeFileSync('citas.json', JSON.stringify([cita],null,2)) 
    } else {
        JSONcitas.push(cita)
        fs.writeFileSync('citas.json', JSON.stringify(JSONcitas,null,2) )
    }

}
function leer() {
    const res = fs.readFileSync('citas.json', 'utf8')
    return res
}

module.exports = { registrar, leer }






