import Card from '../components/Card.jsx'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ListInSection = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.getDiscrep(id)
  }, [])

  return (
    <div>
      <button onClick={() => console.log(id)}>Test</button>
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
        />
      ))}
    </div>
  )
}

export default ListInSection
