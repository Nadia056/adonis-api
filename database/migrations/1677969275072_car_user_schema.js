'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarUserSchema extends Schema {
  up () {
    this.create('car_users', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('clients');
      table.integer('car_id').unsigned().references('id').inTable('cars');
      table.timestamps()
    })
  }

  down () {
    this.drop('car_users')
  }
}

module.exports = CarUserSchema
