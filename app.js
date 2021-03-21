const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors')

// Tabla del 5

console.clear()

// console.log(process.argv)
console.log( argv )

console.log('base: yargs', argv.b )

//console.log(process.argv) // Argumentos que viene por la consola

// Desestructuracion de arreglos
// const [,,arg3 = 'base=5'] = process.argv
// const [ , base] = arg3.split('=')

// console.log(base)

//const base = 6

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err) )

