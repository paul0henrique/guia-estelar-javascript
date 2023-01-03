// Transformar notas do sistema numérico em notas ABC

let nota = 80
let notaA = nota >= 90
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaF = nota < 60
let notaConvertida

if (notaA) {
    notaConvertida = "A"
    console.log(`A nota ${nota} equivale à nota ${notaConvertida}`)
} else if (notaB) {
    notaConvertida = "B"
    console.log(`A nota ${nota} equivale à nota ${notaConvertida}`)
} else if(notaC) {
    notaConvertida = "C"
    console.log(`A nota ${nota} equivale à nota ${notaConvertida}`)
} else if(notaD) {
    notaConvertida = "D"
    console.log(`A nota ${nota} equivale à nota ${notaConvertida}`)
}  else if(notaF) {
    notaConvertida = "F"
    console.log(`A nota ${nota} equivale à nota ${notaConvertida}`)
} else {
    console.log(`A nota ${nota} é inválida.`)
}