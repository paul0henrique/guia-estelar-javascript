// String to number
let string = "12"
Number(string)
console.log(string)

// Number to string
let number = 12
String(number)
console.log(number)

// Lenght
let word = "Computation"
console.log(`${word} tem ${word.length} caracteres.`)

// toFixed and replace
let numero = 4.144444
numero.toFixed(2)
console.log(numero.toFixed(2).replace(".", ",")) // string

// toUpperCase
let palavra = "brasil"
console.log(palavra.toUpperCase())

// toLowerCase
let substantivoComum = "GOVERNO"
console.log(substantivoComum.toLowerCase())

// split
let phrase = "Teoria da Computação é incrível."

let array = phrase.split(" ")
console.log("Array de palavras: ", array)

// join
let phraseWithUnderscore = array.join("_")
console.log(phraseWithUnderscore)

let phraseWithSpaces = array.join(" ")
console.log(phraseWithSpaces)

// includes (case sensitive)
console.log(phrase.includes("Teoria"))

