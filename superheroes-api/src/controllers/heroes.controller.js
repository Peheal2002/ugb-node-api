const Hero = require("../models/Hero.js");

async function list(req, res) {
    const movies = await Hero.findAll();
    return res.status(200).json(movies);
}
//async é uma palavra-chave usada para declarar uma função assíncrona em JavaScript. Funções assíncronas permitem o uso de operações assíncronas, como chamadas de API ou consultas a bancos de dados, sem bloquear a execução do código. Dentro de uma função assíncrona, você pode usar a palavra-chave await para esperar a resolução de promessas antes de continuar a execução do código.
//await é uma palavra-chave usada dentro de funções assíncronas para pausar a execução da função até que uma promessa seja resolvida. Ela permite escrever código assíncrono de forma mais legível e sequencial, evitando o uso excessivo de callbacks ou encadeamento de promessas.

module.exports = {
    list 
};