function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Ingrese un momento del día -mañana, tarde o noche-: `, (momento) => {
  if (momento == "mañana") {
    momentoHoraM = randomIntInc(5,12)
    momentoMinutosM = randomIntInc(0,59)
    console.log(`Son las ${momentoHoraM}:${momentoMinutosM}. Buenos días.`)
    } else if (momento == "tarde"){
        momentoHoraT = randomIntInc(13,19)
        momentoMinutosT = randomIntInc(0,59)
        console.log(`Son las ${momentoHoraT}:${momentoMinutosT}. Buenas tardes.`)
    } else if (momento == "noche"){
          momentoHoraN = randomIntInc(20,23)
          momentoMinutosN = randomIntInc(0,59)
          console.log(`Son las ${momentoHoraN}:${momentoMinutosN}. Buenas noches.`)
        }
  console.log(`Programa terminado!`)
  readline.close()
})
