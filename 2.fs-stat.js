const fs = require("node:fs") // a partir de Node 16 se recomienda usar el prefijo node: para evitar conflictos con paquetes de terceros

const stats = fs.statSync("./archivo.txt")
console.log(
    stats.isFile(), // es un archivo
    stats.isDirectory(), // es un directorio
    stats.isSymbolicLink(), // es un enlace simbólico
    stats.size // tamaño en bytes
);