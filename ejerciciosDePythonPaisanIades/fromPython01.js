// Ejercicio de cálculo de superficie de un triángulo.

const readline = require ("readline")
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("\nIngrese la base del triángulo: ", function(base){
    r1.question("Ahora ingrese la altura: ",function(altura) {
        console.log(`La superficie del triángulo es ${base*altura/2}`)
        console.log(`\nPresione CTRL+C para salir.`)
    })
})

r1.on("close", function(){
    console.log("\nGracias")
    process.exit(0)
})