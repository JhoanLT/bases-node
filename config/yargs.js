const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
                    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
                    .command('listar', 'Genera un archivo con la tabla generada', options)
                    .help()
                    .argv;

module.exports = {
    argv
}