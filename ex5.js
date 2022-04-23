// Exemplo 05
// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 = 6


function calculaFatorial(n) {
    let index = n;
    do {
        return `${n}! = ${index} * ${index-1} * ${index-2} * ${index-3} * ${index-4}`
        index--
    } while (index > 0)
}


console.log(calculaFatorial(5))
