const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Aircraft = new Schema(
  {
    model: { type: String, required: true },
    tail_number: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('aircraft', Aircraft)
