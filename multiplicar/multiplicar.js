const fs     = require('fs');
const colors = require('colors');

const listarTabla = (base, limite=10) => {
    console.log('======================'.green);
    console.log(`== Tabla del ${base}==`.green);
    console.log('======================'.green);
    let tabla = '';
    for(let i=1; i<=limite; i++){
        tabla += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(tabla);
};

const crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject('El valor introducido no es un número');
            return;
        }

        let data = '';
        
        for(let i=1; i<=limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        //Escribir un archivo con node js
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla,
}