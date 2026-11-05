const Hero = require("../models/Hero.js");

async function list(req, res) {
    const movies = await Hero.findAll();
    return res.status(200).json(movies);
}
//async é uma palavra-chave usada para declarar uma função assíncrona em JavaScript. Funções assíncronas permitem o uso de operações assíncronas, como chamadas de API ou consultas a bancos de dados, sem bloquear a execução do código. Dentro de uma função assíncrona, você pode usar a palavra-chave await para esperar a resolução de promessas antes de continuar a execução do código.
//await é uma palavra-chave usada dentro de funções assíncronas para pausar a execução da função até que uma promessa seja resolvida. Ela permite escrever código assíncrono de forma mais legível e sequencial, evitando o uso excessivo de callbacks ou encadeamento de promessas.
// const { name, universe, power } = req.body; é uma técnica de desestruturação/deserialização em JavaScript que permite extrair valores de objetos ou arrays e atribuí-los a variáveis individuais. Nesse caso, está extraindo as propriedades name, universe e power do objeto req.body, que contém os dados enviados na requisição HTTP.
async function create(req, res){
    const { name, universe, power} = req.body;
    if(!name || !universe || !power){
        return res.status(400).json({message: "Nome, universo e poder são obrigatórios"});
    }
    // !name verifica se a variável name é falsa (undefined, null, vazio, etc.). Se for falsa, significa que o campo name não foi fornecido na requisição. O mesmo vale para !universe e !power.
    // return res.status(400).json({message: "Nome, universo e poder são obrigatórios"}); envia uma resposta HTTP com status 400 (Bad Request) e um objeto JSON contendo uma mensagem de erro. Isso indica que a requisição não foi válida devido à falta de campos obrigatórios.
    // const hero = await Hero.create({name, universe, power}); cria um novo registro no banco de dados usando o modelo Hero. A função create é fornecida pelo Sequelize e insere um novo registro com os valores fornecidos para name, universe e power. O uso de await garante que a execução da função seja pausada até que a operação de criação seja concluída.
    const hero = await Hero.create({name, universe, power});
    return res.status(201).json(hero);
}

module.exports = {
    list,
    create
};