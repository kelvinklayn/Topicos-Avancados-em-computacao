//3) Crie um programa que declare um vetor com 10 produtos e calcule o valor toral dos produtos no vetor:
//Estrutura do produto: id, nome, preco, quantidade

let produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.0, quantidade: 2 },
    { id: 2, nome: 'Produto 2', preco: 15.5, quantidade: 3 },
    { id: 3, nome: 'Produto 3', preco: 8.75, quantidade: 5 },
    { id: 4, nome: 'Produto 4', preco: 20.0, quantidade: 1 },
    { id: 5, nome: 'Produto 5', preco: 12.25, quantidade: 4 },
    { id: 6, nome: 'Produto 6', preco: 7.99, quantidade: 2 },
    { id: 7, nome: 'Produto 7', preco: 6.5, quantidade: 3 },
    { id: 8, nome: 'Produto 8', preco: 9.99, quantidade: 2 },
    { id: 9, nome: 'Produto 9', preco: 14.0, quantidade: 1 },
    { id: 10, nome: 'Produto 10', preco: 18.5, quantidade: 2 }
  ];
  
  const calcularValorTotal = (produtos) => {
    let valorTotal = 0; 
    for (const produto of produtos) {
      valorTotal += produto.preco * produto.quantidade;
    }
  
    return valorTotal;
  };

  let valorTotal = calcularValorTotal(produtos);
  console.log(`O valor total dos produtos é: R$ ${valorTotal.toFixed(2)}`);

  //4) Adicione ao programa anterior uma função que acrescente um novo produto no vetor de produtos
  const readline = require('readline')
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  
  const adicionarProduto = () => {
      rl.question('Digite o nome do produto: ', (nomeProduto) => {
          rl.question('Digite o valor do produto: ', (precoProduto) => {
              rl.question('Digite a quantidade do produto: ', (quantidadeProduto) => {
                  let id = produtos.length + 1
                  produtos.push({ id, nome: nomeProduto, preco: parseFloat(precoProduto), quantidade: parseInt(quantidadeProduto) })
                  console.log(`Produto adicionado com sucesso!`)
  
                  valorTotal = calcularValorTotal(produtos)
                  console.log(`O valor total dos produtos é: R$ ${valorTotal.toFixed(2)}`)
  
                  rl.question('Deseja adicionar outro produto? (S/N): ', (resposta) => {
                      if (resposta.toLowerCase() === 's') {
                          adicionarProduto()
                      } else {
                          rl.close()
                      }
                  });
              });
          });
      });
  }
  
  adicionarProduto();