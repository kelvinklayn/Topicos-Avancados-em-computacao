//1) Utilizando a função reduce da API do javascript para vetores, crie uma função de callback que realize a soma dos quadrados do vetor de medidas de tensão realizadas por um sensor de tensão:
const leiturasTensao = [127.5, 0.75, -80.2, -122.3, 2.45, 188.33];

let somaQuadrados = leiturasTensao.reduce((acumulador, numero) =>{
    console.log(acumulador)
    console.log(numero)
        return acumulador += numero * numero
    },0)

console.log(somaQuadrados)