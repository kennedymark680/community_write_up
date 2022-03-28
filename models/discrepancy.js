const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Discrepancy = new Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    aircraft: { type: String, required: true },
    description: { type: String, required: true },
    open: { type: Boolean, required: true },
    section: { type: String, required: false },
    image: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('discrepancy', Discrepancy)
