const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Discrepancy = new Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    tail_number: { type: String, required: true },
    description: { type: String, required: true },
    open: { type: Boolean, required: false },
    section: { type: String, required: false },
    image: { type: String, required: false },
    aircraft: { type: String, ref: 'Aircraft' },
    maintenance_comment: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('discrepancy', Discrepancy)
