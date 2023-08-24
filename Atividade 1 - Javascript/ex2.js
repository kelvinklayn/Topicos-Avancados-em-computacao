//2) Crie um programa em javascript que contenha uma arrow function que receba uma base e um expoente
// e calcule a potência da base elevado ao expoente.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a base: ', (base) => {
  rl.question('Digite o expoente: ', (expoente) => {
    const resultado = calcularPotencia((base),(expoente));

    console.log(`O resultado de ${base} elevado a ${expoente} é igual a ${resultado}`);

    rl.close();
  });
});

const calcularPotencia = (base, expoente) => {
  return Math.pow(base, expoente);
};