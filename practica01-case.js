function randomIntInc(low, high) {
 return Math.floor(Math.random() * (high - low + 1) + low)
}
  
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

var text=readline.question(`Ingrese un momento del día -mañana, tarde o noche-: `, (momento) =>{
switch (text) {
    case momento == "mañana":
        momentoHoraM = randomIntInc(5,12)
        momentoMinutosM = randomIntInc(0,59)
        console.log(`Son las ${momentoHoraM}:${momentoMinutosM}. Buenos días.`)
        break
    case momento == "tarde":
        momentoHoraT = randomIntInc(13,19)
        momentoMinutosT = randomIntInc(0,59)
        console.log(`Son las ${momentoHoraT}:${momentoMinutosT}. Buenas tardes.`)
        break
    case momento == "noche":
        momentoHoraN = randomIntInc(20,28)
        momentoMinutosN = randomIntInc(0,59)
        console.log(`Son las ${momentoHoraN}:${momentoMinutosN}. Buenas noches.`)
        break
    }
})
