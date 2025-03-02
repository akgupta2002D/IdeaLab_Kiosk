/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('staff', function (table) {
        table.increments('id').primary(); // Auto-incrementing primary key
        table.string('name').notNullable();
        table.text('bio').notNullable();
        table.string('image').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('staff');
};
