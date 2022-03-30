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
          <div className='image-wrapper'>
            <img src={props.image} alt='discrepancy'/>
          </div>
          <div className='card-content'>
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
            <div className='button-group'>
              <button className="card-Button" onClick={() => props.deleteDiscrep(props.id)}>Delete</button>
              <button className="card-Button" onClick={() => props.updateDiscrep(props.id)}>{status}</button>
              <button className="card-Button" onClick={() => showDetails()}>Details</button>
            </div>
          </div>
    </div>
  )
}

export default Card
