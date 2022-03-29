import Card from '../components/Card.jsx'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'

const ListInSection = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.getDiscrep(id)
  }, [])

  return (
    <div>
      <Nav />
      <Link to={`/Discrepancy/${id}`}>
        <button>Discrep?</button>
      </Link>
      {props.searchResults.map((dis) => (
        <Card
          key={dis._id}
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
