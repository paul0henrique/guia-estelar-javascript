// Array with constructor

let myArray = new Array(1,2,3)
console.log(myArray)

let array = new Array(5)
console.log(array)

// Contagem

console.log(myArray.length)
console.log(myArray[0])

// Cadeia de caracteres em array

let word = "Paulo"

console.log(Array.from(word))

// push: adiciona ao final

let frutas = ['maçã', 'banana', 'abacaxi']

frutas.push('goiaba')

console.log(frutas)

// unshift: adiciona ao começo

frutas.unshift('mamão')

console.log(frutas)

// pop: remove do final

frutas.pop()

console.log(frutas)

// shift: remove do começo

frutas.shift()

console.log(frutas)

// slice: intervalo

console.log(frutas.slice(0,1))

// splice
frutas.splice(0, 2)
console.log(frutas)