// Exemplo 03
// Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function tabuadaCalculo(num) {
    for (let i = 1; i<=10 ; i++) {

        console.log(`${num} x ${i} = ${num*i}` )
    }
}

console.log(tabuadaCalculo(9))
console.log(tabuadaCalculo(5))
