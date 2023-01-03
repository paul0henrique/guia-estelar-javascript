// Sistema de gastos familiares

let family = {
    receitas: [100, 500, 600],
    despesas: [10, 20, 30]
}

function soma(lista){
    let total = 0
    for (valor of lista) {
        total += valor
    }
    return total
}

function balanco() {
    const calculaReceitas = soma(family.receitas)
    const calculaDespesas = soma(family.despesas)

    const total = calculaReceitas - calculaDespesas
    let texto = "negativo"

    if (total >= 0){
        texto = "positivo"
    }

    console.log(`Seu saldo é ${texto}: R$ ${total.toFixed(2)}`)
}

balanco() 
