//Ejercicio de calculo de recaudación total de un estadio, según su precio de los distintos tipos de localidades y socios.

const readline = require("readline")
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

populares = 50000
plateas = 15000
plateasPreferenciales = 5000
palcosx<<< = 2000
descuentoSocios = 20
ventaPopuDescFinal = 0

invitadosPopulares = 0
invitadosPlatea = 0
invitadosPlateaPreferencial = 1500
invitadosPalco = 700

r1.question("Cuantos socios en tribuna?: ", function(cuantossocios))