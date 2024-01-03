const fs = require("node:fs")

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
    console.log(text);
})

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
    console.log(text);
})


/* 
Existe una forma de implementar promesas en modulos de node.js que tengan promesas nativamente
const { promisify } = require("node:util")
const readFilePromise = promisify(fs.readFile)
*/