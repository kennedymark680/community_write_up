const { model } = require('mongoose')
const Discrepancy = require('./discrepancy')

const Discrepancy = model('Discrepancy', Discrepancy)

module.exports = {
  Discrepancy
}
