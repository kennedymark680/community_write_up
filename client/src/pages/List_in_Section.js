import Card from '../components/Card.jsx'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import AircraftBanner from '../components/AircraftBanner.jsx'

const ListInSection = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.getDiscrep(id)
  }, [])

  return (
    <div className="list_in_section">
      <AircraftBanner />
      <div className="nav-container">
        <Nav />
        <Link to={`/Discrepancy/${id}`}></Link>
      </div>
      <Link to={`/Discrepancy/${id}`}>
        <button className="disButton">Add Discrepancy</button>
      </Link>
      {props.searchResults.map((dis) => (
        <Card
          id={dis._id}
          title={dis.title}
          date={dis.date}
          image={dis.image}
          open={dis.open}
          deleteDiscrep={props.deleteDiscrep}
          updateDiscrep={props.updateDiscrep}
        />
      ))}
    </div>
  )
}

export default ListInSection
