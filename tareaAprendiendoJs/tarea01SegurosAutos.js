function hasNumbers(t)
{
var regex = /\d/g;
return regex.test(t);
} 

const listaAutos = []
listaAutos.push('Renault 4')
listaAutos.push('Ford Taunus')
listaAutos.push('Ami 8')
listaAutos.push('Opel K180')

const conNumero = 500
const sinNumero = 800
let subTotalCon = 0
let subTotalSin = 0
let total = 0

listaAutos.forEach(function(auto) {
    if (hasNumbers(auto) === true) {
        console.log(`Tu auto ${auto} va a pagar $${conNumero}.`)
        subTotalCon += conNumero
    } 
    else {
        console.log(`Como tu auto ${auto} no tienen números en el modelo, va a pagar $${sinNumero}.`)
        subTotalSin += sinNumero
    }
});

total = subTotalCon + subTotalSin
console.log('')
console.log(`Los autos que tienen número en el modelo deben pagar $${subTotalCon}`)
console.log(`Los autos que NO tienen número en el modelo deben pagar $${subTotalSin}`)
console.log(`El total de seguro a pagar será de $${total}`)
console.log('')