const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite) => {

    console.log('======================'.green);

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('El valor introducido como base "' + base + '" no es un numero');
            return;
        }
        if (!Number(limite)) {
            reject('El valor introducido como limite "' + limite + '" no es un numero');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log((base + " x " + i + " = " + (base * i) + '\n').green);
        }

    });



}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

            let data = '';

            if (!Number(base)) {
                reject('El valor introducido como base "' + base + '" no es un numero');
                return;
            }
            if (!Number(limite)) {
                reject('El valor introducido como limite "' + limite + '" no es un numero');
                return;
            }


            for (let i = 1; i <= limite; i++) {
                data += (base + " x " + i + " = " + (base * i) + '\n');
            }


            fs.writeFile(`tabla/tabla-${base} con limite ${limite}.txt`, data, (err) => {

                if (err)
                    reject(err)
                else {
                    resolve(`tabla-${base} con limite ${limite}.txt`);
                }

            });


        }

    );
}

module.exports = {
    crearArchivo,
    listarTabla
}