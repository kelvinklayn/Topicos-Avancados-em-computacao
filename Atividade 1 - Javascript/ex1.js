//1) Crie um programa em javascript que imprima seu nome.

const readline = require('readline');

const rl = readline.createInterface({input: process.stdin,output: process.stdout})

rl.question('Digite seu nome: ', (resposta) => {
  console.log(`Seu Nome:${resposta}`);
  
  rl.close();
});
