'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name',80);
      table.string('phone',80);
      table.string('email',254).notNullable().unique();
      table.boolean('status').defaultTo(0);
      table.integer('activation_code');
      table.integer('role_id').unsigned().references('id').inTable('roles').defaultTo(1);
      table.string('password',80);

      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
