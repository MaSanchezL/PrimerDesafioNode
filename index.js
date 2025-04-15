const { registrar, leer } = require("./Operaciones.js");

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (operacion === "registrar") {
    if (!nombre || !edad || !tipo || !color || !enfermedad) {
        console.error("Error: Faltan argumentos. Debes proporcionar: nombre, edad, tipo, color y enfermedad.");
        process.exit(1);
    }
    registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === "leer") {
    leer();
} else {
    console.error("Operación no válida. Usa 'registrar' o 'leer'.");
}
