'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarUserSchema extends Schema {
  up () {
    this.create('car_users', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('car_users')
  }
}

module.exports = CarUserSchema
