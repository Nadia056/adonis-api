'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bike extends Model {
  static get fillable() {
    return ['brand', 'model', 'year', 'color']
  }
}

module.exports = Bike
