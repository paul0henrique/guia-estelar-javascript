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

const sayMyName = () => {
    console.log("Paulo")
}

sayMyName()

// callback function

sayMyNameAgain(
    () => {
        console.log('callback')
    }
)