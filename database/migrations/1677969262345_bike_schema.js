'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BikeSchema extends Schema {
  up () {
    this.create('bikes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('bikes')
  }
}

module.exports = BikeSchema
