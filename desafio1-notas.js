// Transformar notas do sistema numérico em notas ABC

let nota = 100
let notaA = nota >= 90
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaF = nota < 60

if (notaA) {
    console.log(`A nota ${nota} equivale à nota A`)
} else if (notaB) {
    console.log(`A nota ${nota} equivale à nota B`)
} else if(notaC) {
    console.log(`A nota ${nota} equivale à nota C`)
} else if(notaD) {
    console.log(`A nota ${nota} equivale à nota D`)
}  else if(notaF) {
    console.log(`A nota ${nota} equivale à nota F`)
} else {
    console.log(`A nota ${nota} é inválida`)
}