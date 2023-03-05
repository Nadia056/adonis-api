'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BikeUser extends Model {
  static get fillable() {
    return ['user_id', 'bike_id']
  }

  user() {
    return this.belongsTo('App/Models/User')
  }

  bike() {
    return this.belongsTo('App/Models/Bike')
  }
}

module.exports = BikeUser
