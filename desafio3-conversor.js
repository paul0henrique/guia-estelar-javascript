// Celsius para Fahrenheit

function converteTemperatura(temperatura){
    let isCelsius = temperatura.toUpperCase().includes('C')
    let isFahrenheit = temperatura.toUpperCase().includes('F')

    // Fluxo de erro
    if(!isCelsius && !isFahrenheit){
        throw new Error("Grau não identificado")
    }

    // F -> C
    let temperaturaNumerica = Number(temperatura.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let sinal = 'C'

    // C -> F
    if(isCelsius) {
        temperaturaNumerica = Number(temperatura.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        sinal = 'F'

    }

    return formula(temperaturaNumerica) + sinal
} 

try {
    console.log(converteTemperatura('-10C'))

} catch (error) {
    console.log(error)
}