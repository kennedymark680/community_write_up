import { useParams } from 'react-router-dom'
import Card from '../components/Card.jsx'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ListInSection = (props) => {
  let { aircraftId } = useParams()

  useEffect(() => {
    props.getDiscrep(aircraftId)
  }, [])

  return (
    <div>
      <button onClick={() => console.log(aircraftId)}>Test</button>
      <Link to={`/Discrepancy/${aircraftId}`}>
        <button>Discrep?</button>
      </Link>
      {props.searchResults.map((dis) => (
        <Card
          key={dis._id}
          id={dis._id}
          title={dis.title}
          date={dis.date}
          image={dis.image}
          deleteDiscrep={props.deleteDiscrep}
        />
      ))}
    </div>
  )
}

export default ListInSection
