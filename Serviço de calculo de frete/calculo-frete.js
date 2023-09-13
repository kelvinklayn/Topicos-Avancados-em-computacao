

    function pesoCubico(altura, largura, comprimento){
        return (altura * largura  * comprimento * 300);
    }
    
    function valorFrete(valorProduto){
        return valorProduto * 0.3;
    }
    
    function frete(pesoReferencia, valorFrete){
        const taxaDespacho = 54;
    
        return (pesoReferencia * 0.5 + taxaDespacho + valorFrete)
    }




export {pesoCubico, valorFrete, frete}
