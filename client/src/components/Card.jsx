import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
  const navigate = useNavigate()
  let status = ''

  const checksStatus = () => {
    if (props.open) {
      return status = 'Open'
    } else {
      return status = 'Closed'
    }
  }

  const showDetails = () => navigate(`/Details/${props.id}`)

  checksStatus()
  console.log(props.id)

  return (
    <div className="card">

          <h1>{props.title}</h1>
          <h3>{props.date}</h3>
          {/* <img src={props.image} alt='discrepancy'/> */}
          <button onClick={() => props.deleteDiscrep(props.id)}>Delete</button>
          <button onClick={() => props.updateDiscrep(props.id)}>{status}</button>
          <button onClick={() => showDetails()}>Details</button>

      
    </div>
  )
}

export default Card