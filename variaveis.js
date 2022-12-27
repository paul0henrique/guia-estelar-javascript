
// JS é uma linguage1m fracamente tipada e dinâmica

// var: global e local
// devolve a variável como undefined caso ela exista, mas apareça depois (hoisting)
var name = "Paulo"

// let: local
let idade = 21

// const: local/imutável
const valorMaximo = 3

// Nomeação
// camelCase
// snakeCase

let age1 = 2
let _age1 = 3

console.log('age1 == _age1?', age1 == _age1)

console.log(typeof age1)

// interpolação: template literals ou template strings

console.log(`${name} tem ${idade} anos.`)

// EXERCÍCIO

let weight

let name = "Paulo"
let age = 21
let stars = 4.9
let isSubscribed = true