'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BikeUserSchema extends Schema {
  up () {
    this.create('bike_users', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('clients');
      table.integer('bike_id').unsigned().references('id').inTable('bikes');
      table.timestamps()
    })
  }

  down () {
    this.drop('bike_users')
  }
}

module.exports = BikeUserSchema
