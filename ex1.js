// Exemplo 01
// Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50  
// b) números de 1 a 50, quando chegar no número 25 interrompa a instrução e pare o loop 
// c) números de 1 a 50, quando chegar no número 10 pule a instrução

//letra a)

for (i=1; i<=50; i++) {
    console.log(` número ${i}`)
}

//letra b

for (let i = 1; i<=50 ; i++) {
    console.log(` número ${i}`);

    if (i === 25) {
        break ;
    }
}

//letra c

let x = 0

while (x < 50) {

    x++
    if (x === 10) {
    
        continue
    }
    console.log(x)
}

