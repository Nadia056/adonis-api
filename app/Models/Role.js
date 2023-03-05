'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Role extends Model {
 static get table() {
    return 'roles'
  }

  static get fillable() {
    return ['name']
  }

  static get hidden() {
    return ['created_at', 'updated_at']
  }

  users() {
    return this.hasMany('App/Models/Client')
  }
}

module.exports = Role
