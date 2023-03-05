'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CarUser extends Model {
  static get fillable() {
    return ['client_id', 'car_id']
  }

  client() {
    return this.belongsTo('App/Models/Client')
  }

  car() {
    return this.belongsTo('App/Models/Car')
  }
}

module.exports = CarUser
