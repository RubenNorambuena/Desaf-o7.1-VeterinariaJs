const {registrar,leer} = require('./operaciones.js');

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)
if(operacion === "registrar"){
    registrar(nombre, edad, tipo, color, enfermedad)
    console.log('Registro Optimo')
    } 
if(operacion === "leer"){
    const res=leer()
    console.log(res)
    }