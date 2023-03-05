'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BikeSchema extends Schema {
  up () {
    this.create('bikes', (table) => {
      table.increments()
      table.string('brand',80);
      table.string('model',80);
      table.string('color',80);
      table.integer('year');
      table.timestamps()
    })
  }

  down () {
    this.drop('bikes')
  }
}

module.exports = BikeSchema
