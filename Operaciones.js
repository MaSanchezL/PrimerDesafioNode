const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };

    let citas = [];
    try {
        const data = fs.readFileSync("citas.json", "utf8");
        citas = JSON.parse(data);
    } catch (error) {
        console.error("No se pudo leer el archivo, puede estar vacío o no existir.");
    }

    citas.push(nuevaCita);

    fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
    console.log("Cita registrada con éxito.");
};

const leer = () => {
    try {
        const data = fs.readFileSync("citas.json", "utf8");
        const citas = JSON.parse(data);
        console.log("Citas registradas:", citas);
    } catch (error) {
        console.error("No se pudieron leer las citas.");
    }
};

module.exports = { registrar, leer };
