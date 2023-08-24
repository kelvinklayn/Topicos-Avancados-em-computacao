//Operações:
//Menu principal com as funcionalidades: Adicionar produto ao carrinho, listar carrinho e remover produto do carrinho de compras.

class Produto {
    constructor(id, nome, preco, quantidadeProduto) {
        this.id = id
        this.nome = nome
        this.preco = preco
        this.quantidadeProduto = quantidadeProduto
    }
}

const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })



const menu = () => {
    console.log('Selecione a opcao da operacao desejada');
    console.log('1 - Adicionar ao Carrinho');
    console.log('2 - Remover Produto');
    console.log('3 - Listar Produtos Carrinho');
    console.log('0 - Sair');
}

const addProduto = (produto) => {
    carrinho.push(produto)
    console.log(`Produto Adicionado com sucesso!`)
    mainMenu();
}

const listarProdutos = () => {
    carrinho.map((produto) =>
        console.log(produto.id, produto.nome, produto.preco, produto.quantidadeProduto))
        mainMenu()
}

const removerProduto = (id) => {
    const index = carrinho.findIndex((produto) => produto.id === id);
    if (index !== -1) {
        carrinho.splice(index, 1);
        console.log('Produto removido com sucesso.');
    } else {
        console.log('Produto não encontrado.');
    }
    mainMenu();
}

let carrinho = []

function mainMenu() {
    menu()
    rl.question(`Escolha uma opção: `, (op) => {
        switch (parseInt(op)) {
            case 1:
                rl.question('Digite o nome do produto: ', (nomeProduto) => {
                    rl.question('Digite o valor do produto: ', (precoProduto) => {
                        rl.question('Digite a quantidade do produto: ', (quantidadeProduto) => {
                            let id = carrinho.length + 1;
                            let novoProduto = new Produto(id, nomeProduto, parseFloat(precoProduto), parseInt(quantidadeProduto));
                            addProduto(novoProduto);
                        });
                    });
                });
                break;

            case 2:
                rl.question('Digite o Id do produto que deseja remover:', (selectedId) => {
                    removerProduto(parseInt(selectedId));
                });
                break;

            case 3:
                listarProdutos();
                break;

            case 0:
                rl.close();
                return

            default:
                console.log('Opção inválida. Tente novamente.');
                mainMenu()
                break;
        }
    });
}
mainMenu();