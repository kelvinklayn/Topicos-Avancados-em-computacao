    //2) utilizando as funções find e map crie um programa que peça ao usuáro para digitar um número de telefone sem formatação e o programa deverá retornar o endereço e nome da pessoa que consta na lista abaixo:

    const pessoas = [{nome: 'Cassio', tel: 32424585, endereco: 'Rua dos Saberes, 241 - Barro Aruanã'}, {nome: 'Sabrina', tel: 33424586, endereco: 'Rua dos bosques, 241 - Barro Tijuca'  }, {nome: 'Fernando', tel: 33424588, endereco: 'Rua Tamandaré, 6000- Barro Seminário'  }]
    let telefone

    var readline = require('readline')

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question("Qual o numero do telefone? ",(resposta) => {
        telefone = parseInt(resposta)
        
        const pessoaEncontrada = pessoas.find((pessoa) => 
            pessoa.tel === telefone
        )
        if (pessoaEncontrada) {
            console.log(`Nome: ${pessoaEncontrada.nome}`)
            console.log(`Endereço: ${pessoaEncontrada.endereco}`)
        } else {
            console.log('Número de telefone não encontrado na lista.')
        }
    
        rl.close()
    })