// argumentos de entrada
console.log(process.argv)

/* 
node 7.process.js hola curso node --buenas
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Jurgen_Alfaro\\OneDrive - Dell Technologies\\Documents\\Nodejs\\7.process.js',
  'hola',
  'curso',
  'node',
  '--buenas'
]
*/

// controlar el proceso y su salida
// process.on("exit", () => {
//     // limpiar los recursos
// })

// current working directory
console.log(process.cwd());


// platform
console.log(process.env.PEPITO)