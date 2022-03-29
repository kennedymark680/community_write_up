const express = require('express')
const cors = require('cors')
const DiscrepancyController = require('./controllers/controllers')
const db = require('./db')
// const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
// app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

// Create the routes below

app.get('/list_in_section/:id', DiscrepancyController.getDiscrepancy)
app.post('/post', DiscrepancyController.createDiscrepancy)
app.delete('/delete/:id', DiscrepancyController.deleteDiscrepancy)
app.put('/update/:id', DiscrepancyController.updateDiscrepancy)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
