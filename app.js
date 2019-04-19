const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

const comando = argv._[0];

switch(comando){
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then((archivo) => {
            console.log(`Archivo creado: ${ colors.green(archivo)}`);
        }).catch((error) => {
            console.log(error);
        });
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
}