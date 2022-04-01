import { useParams } from 'react-router-dom'
import AircraftBanner from '../components/AircraftBanner'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const DiscrepancyForm = (props) => {
  const { id } = useParams()

  return (
    <div className="form-page">
      <div className="nav-container">
        <Nav />
        <AircraftBanner />
      </div>
      <section className="input-section">
        <input
          className="form"
          type="text"
          name="title"
          placeholder="title"
          value={props.title}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="date"
          placeholder="Date"
          value={props.date}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="tail_number"
          placeholder="Tail Number"
          value={props.tail_number}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="description"
          placeholder="Description"
          value={props.description}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="open"
          placeholder="Open?"
          value={props.open}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="section"
          placeholder="Section"
          value={props.section}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="image"
          placeholder="Image"
          value={props.image}
          onChange={props.handleDiscrepancyChange}
        />
        <input
          className="form"
          type="text"
          name="aircraft"
          placeholder="Aircraft"
          value={props.aircraft}
          onChange={props.handleDiscrepancyChange}
        />
      </section>
      <Link to={`/list_in_section/${id}`}>
        <button
          onClick={() => props.submitNewDiscrep(id)}
          className="submit-discrep"
        >
          Submit
        </button>
      </Link>
    </div>
  )
}

export default DiscrepancyForm
