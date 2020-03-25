
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) { 
        table.increments(); // Criar de foram sequencial os IDs

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.float('value').notNullable();
    
        table.string('ong_id').notNullable();    //Relacionamento
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
