// throw

function sayMyName(name = '') {
    if(name === ''){
        throw new Error("Nome obrigatório")
    }
    console.log(name)
}

try {
    sayMyName('PH')
} catch(e) {
    console.log(e)
}