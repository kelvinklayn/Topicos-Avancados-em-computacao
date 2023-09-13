import http from 'http';
import express from 'express';
const port = 8000;

import * as calculoFrete from './calculo-frete.js';

const app = express();

app.get('/api/v1/calcular-frete/:altura/:largura/:comprimento/:peso/:distanciaKm/:valorProduto', (req, res) => {
    const altura = req.params.altura;
    const largura = req.params.largura;
    const comprimento = req.params.comprimento;
    const peso = req.params.peso;
    const distanciaKm = req.params.distanciaKm;
    const valorProduto = req.params.valorProduto;

    const pesoCubico = calculoFrete.pesoCubico(altura, largura, comprimento);
    const valorFrete = calculoFrete.valorFrete(valorProduto);
    const pesoReferencia = pesoCubico > peso ? pesoCubico : peso;

    //o distancia km nao foi utilizado nos calculos, mas está entre os parametros.
    const totalFrete = calculoFrete.frete(pesoReferencia, valorFrete);

    res.json({totalFrete})
});

const server = http.createServer(app);

server.listen(port, function() {
    console.log('Servidor iniciado na porta: 8000');
});