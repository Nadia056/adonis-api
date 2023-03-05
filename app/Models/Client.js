'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
    static boot() {
      super.boot()
  
      // Add global scope
      this.addGlobalScope((builder) => {
        builder.where('role', 'client')
      })
    }
  
    static get fillable() {
      return [
        'name',
        'email',
        'password',
        'phone',
        'role',
        'activation_code',
        'active'
      ]
    }
  
    static get hidden() {
      return ['password', 'remember_token']
    }
  
    tokens() {
      return this.hasMany('App/Models/Token')
    }
  }
  
  module.exports = Client
  