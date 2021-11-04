'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coinflip extends Model {
  bets() {
    return this.hasMany('App/Models/CoinflipBet', 'id', 'coinflip_id')
  }
}

module.exports = Coinflip
