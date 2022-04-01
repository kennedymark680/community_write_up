const db = require('../db')
const Discrepancy = require('../models/discrepancy')
const Aircraft = require('../models/aircraft')

const main = async () => {
  const discrepancy = [
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
    },
    {
      title: 'Open Pin',
      date: '08/17/20',
      tail_number: 'N854MH',
      description:
        'Started up at the fuel farm to a HYD 2 light. Shutdown and saw this.',
      open: false,
      section: 'Oil System',
      image:
        'https://i.ibb.co/CWLcRPF/BCAEE7-C6-1-D8-D-4-AD5-B8-C7-3-B7-E6861-ED41-1-105-c.jpg" alt="BCAEE7-C6-1-D8-D-4-AD5-B8-C7-3-B7-E6861-ED41-1-105-c',
      aircraft: '62431656a7fb4be52a53a850',
      maintenance_comment: ''
    },

    {
      title: 'Friction Washer',
      date: '07/06/21',
      tail_number: 'N858MH',
      description:
        'The very last thing I looked at on my preflight. The friction washer was broken and required a mx flight after.',
      open: false,
      section: 'Flight Controls',
      image:
        'https://i.ibb.co/xgc77G9/3379-B22-D-7612-4575-960-D-3-C394-A66-E8-BD-1-201-a.jpg" alt="3379-B22-D-7612-4575-960-D-3-',
      aircraft: '62431656a7fb4be52a53a850',
      maintenance_comment: ''
    },
    {
      title: 'Cracked Mast',
      date: '02/07/19',
      tail_number: 'N852MH',
      description:
        'The base of the mast was completely cracked. I was able to move the non-rotating swashplate.',
      open: false,
      section: 'Airframe',
      image:
        'https://i.ibb.co/Xt21sw5/AE3-A96-D8-C6-BD-4-A54-8-B7-B-453-D17-B073-C4-1-105-c.jpg" alt="AE3-A96-D8-C6-BD-4-A54-8-B7-B-453-D17-B073-C4-1-105-c',
      aircraft: '62431656a7fb4be52a53a850',
      maintenance_comment: ''
    },
    {
      title: 'Cracked Scoop',
      date: '02/17/19',
      tail_number: 'N878MH',
      description: 'Small crack on the generator scoop.',
      open: false,
      section: 'Airframe',
      image:
        'https://i.ibb.co/wc7JQYV/9800350-B-1-EA5-400-D-85-B0-63-DC9-F25-C9-A8-1-105-c.jpg" alt="9800350-B-1-EA5-400-D-85-B0-63-DC9-F25-C9-A8-1-105-c',
      aircraft: '62431656a7fb4be52a53a850',
      maintenance_comment: ''
    },
    {
      title: 'Missing Wire',
      date: '06/10/18',
      tail_number: 'N863MH',
      description: 'The bleed air was missing the required safety wire.',
      open: false,
      section: 'Airframe',
      image:
        'https://i.ibb.co/YfM7QNV/296-FA035-910-C-40-A2-99-DD-278-FBE0-E3495-1-201-a.jpg" alt="296-FA035-910-C-40-A2-99-DD-278-FBE0-E3495-1-201-a',
      aircraft: '62431656a7fb4be52a53a850',
      maintenance_comment: ''
    },
    {
      title: 'Anti-Collision',
      date: '05/14/20',
      tail_number: 'N852MH',
      description:
        'Started up at the fuel farm to a HYD 2 light. Shutdown and saw this.',
      open: false,
      section: 'Body',
      image:
        'https://i.ibb.co/TLc9z2q/2-BB13-B7-A-809-F-46-FE-97-C2-33856-FDBCF24-1-105-c.jpg" alt="2-BB13-B7-A-809-F-46-FE-97-C2-33856-FDBCF24-1-105-c',
      aircraft: '62431656a7fb4be52a53a850',
      maintenance_comment: ''
    },
    {
      title: 'Hydraulic Cap',
      date: '09/17/21',
      tail_number: 'N862MH',
      description:
        'Found this on the left side of the transmission deck. The hydraulic fluid had just been serviced.',
      open: false,
      section: 'Hydraulic System',
      image:
        'https://i.ibb.co/m4DCsMP/4940-C8-BF-AF60-48-C0-B26-F-9-F0-DDDC22-BD2-1-105-c.jpg" alt="4940-C8-BF-AF60-48-C0-B26-F-9-F0-DDDC22-BD2-1-105-c',
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
