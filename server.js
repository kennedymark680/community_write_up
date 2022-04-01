const express = require('express')
const cors = require('cors')
const DiscrepancyController = require('./controllers/controllers')
const db = require('./db')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

app.get('/list_in_section/:id', DiscrepancyController.getDiscrepancy)
app.post('/post', DiscrepancyController.createDiscrepancy)
app.delete('/delete/:id', DiscrepancyController.deleteDiscrepancy)
app.put('/update/:id', DiscrepancyController.updateDiscrepancy)
app.put('/maintenance_comment/:id', DiscrepancyController.addMaintenanceComment)
app.get('/search', DiscrepancyController.getSearch)
app.get('/aircraftIds', DiscrepancyController.getAircraftId)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
