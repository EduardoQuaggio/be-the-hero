/**
 * ESSE ARQUIVO FICA RESPONSAVEL POR GUARDAR AS ROTAS DE UM TABELA
 */
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(resquest, response){
        const ongs = await  connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(resquest, response){
        const { name, email, whatsapp, city, uf } = request.body; // para pegar todos de uma vez usa uma variavel

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
    }
}