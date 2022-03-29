import { useParams } from 'react-router-dom'
import Card from '../components/Card.jsx'
import { useEffect } from 'react'

const ListInSection = (props) => {
  let { aircraftId } = useParams()

  useEffect(() => {
    props.getDiscrep(aircraftId)
  }, [])

  return (
    <div>
      {props.searchResults.map((dis) => (
        <Card title={dis.title} date={dis.date} image={dis.image} />
      ))}
    </div>
  )
}

export default ListInSection
