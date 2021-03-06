
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(table) {
         table.increments();
         table.string('name', 128).notNullable(); 
         table.integer('cohort_id').unsigned().references('id').inTable('cohorts');
     });
 };
 
 exports.down = function(knex, Promise) {
     return knex.schema.dropTableIfExists('students');
 };