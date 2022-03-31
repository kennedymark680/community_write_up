const Discrepancy = require('../models/discrepancy')
const Aircraft = require('../models/aircraft')

const createDiscrepancy = async (req, res) => {
  try {
    const newDiscrepancy = await new Discrepancy(req.body)
    await newDiscrepancy.save()
    return res.send('Submitted Discrepancy')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getDiscrepancy = async (req, res) => {
  try {
    const discrepancies = await Discrepancy.find()
    return res.status(200).send(discrepancies)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteDiscrepancy = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Discrepancy.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Discrepancy Deleted')
    }
    throw new Error('Discrepancy Not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateDiscrepancy = async (req, res) => {
  const { id } = req.params
  try {
    const updated = await Discrepancy.findByIdAndUpdate(id, { open: false })
    return res.send(updated)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addMaintenanceComment = async (req, res) => {
  console.log(req.body)
  const mxComment = req.body.maintenance_comment
  const { id } = req.params
  try {
    const updated = await Discrepancy.findByIdAndUpdate(id, {
      maintenance_comment: mxComment
    })
    return res.send(updated)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSearch = async (req, res) => {
  try {
    const results = await Discrepancy.find({
      tail_number: `${req.query.tail_number}`
    })
    return res.status(200).send(results)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const updateDiscrepancy = async (req, res) => {
//   try {
//     const discrepancies = await Discrepancy.find()
//     return res.status(200).send(discrepancies)
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

module.exports = {
  createDiscrepancy,
  getDiscrepancy,
  deleteDiscrepancy,
  updateDiscrepancy,
  addMaintenanceComment,
  getSearch
}
