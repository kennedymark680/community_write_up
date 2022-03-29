const { model } = require('mongoose')
const Discrepancy = require('./discrepancy')
const Aircraft = require('./aircraft')

const Discrepancy = model('Discrepancy', Discrepancy)
const Aircraft = model('Aircraft', Aircraft)

module.exports = {
  Discrepancy,
  Aircraft
}
