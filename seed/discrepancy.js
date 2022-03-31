const db = require('../db')
const Discrepancy = require('../models/discrepancy')
const Aircraft = require('../models/aircraft')

const main = async () => {
  const discrepancy = [
    {
      title: 'Oil Leak',
      date: '03/25/22',
      tail_number: 'N886MH',
      description: `There's oil EVERYWHERE`,
      open: true,
      section: 'Engine',
      image: 'https://i.ibb.co/p21WBB0/IMG-4408.jpg',
      aircraft: '62431656a7fb4be52a53a850',
      maintenance_comment: ''
    },
    {
      title: 'Hydraulic Belt',
      date: '02/23/20',
      tail_number: 'N852MH',
      description:
        'Started up at the fuel farm to a HYD 2 light. Shutdown and saw this.',
      open: false,
      section: 'Hydraulic',
      image: 'https://i.ibb.co/p21WBB0/IMG-4408.jpg',
      aircraft: '62431656a7fb4be52a53a850',
      maintenance_comment: ''
    }
  ]

  const aircraft = [
    {
      model: 'EC130'
    }
  ]

  await Aircraft.insertMany(aircraft)
  await Discrepancy.insertMany(discrepancy)
  console.log('Discrepancies incoming!')
}

const run = async () => {
  await main()
  db.close()
}
run()
