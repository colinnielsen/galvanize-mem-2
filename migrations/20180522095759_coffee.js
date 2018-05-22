
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coffee', (table)=>{
    table.increments()
    table.text('name')
    table.text('roaster')
    table.decimal('aroma')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('coffee')
};
