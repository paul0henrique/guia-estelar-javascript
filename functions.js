// function statment

function createGrammarSubjects() {
    console.log("Simple present")
    console.log("Irregular verbs")
    console.log("Adverbs of intensity")
}

createGrammarSubjects()
createGrammarSubjects()

// parameters

const sum = function(number1, number2){
    console.log(number1 + number2)
}

sum(2,3) // arguments

// arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName("PH")

// callback function

sayMyName(
    () => {
        console.log('callback')
    }
)

// function constructor

function Person(name) {
    this.name = name
}

const ph = new Person("Paulo Henrique")

console.log(ph)