// for
// break: para a execução do loop
// continue: pula a execução do momento

for(let i = 0; i <= 10 ; i++){
    console.log(i)
}

// while
let i = 0
while(i < 10) {
    console.log(i)

    i++
}

// for of
let name = "PH"
let names = ["Paulo", "Henrique"]

for(let char of name){
    console.log(char)
}

// for in
let person = {
    name: "PH",
    age: 21,
    weight: 68
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}