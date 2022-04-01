import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import AircraftBanner from '../components/AircraftBanner'

const Details = ({
  searchResults,
  maintenance_comment,
  handleDiscrepancyChange,
  addMaintenanceComment
}) => {
  let { id } = useParams()
  console.log(searchResults)

  let selectedDis = searchResults.filter((dis) => id === dis._id)
  console.log(selectedDis[0])
  return (
    <div>
      <div className="details-page">
        <AircraftBanner title={selectedDis[0].title} />
        <Nav />
        <img
          src={`${selectedDis[0].image}`}
          alt="discrepancy"
          className="details-image"
        />
        <div className="details-info">
          <h1>{selectedDis[0].title}</h1>
          <h3>{selectedDis[0].date}</h3>
          <h3>{selectedDis[0].tail_number}</h3>
          <h3>{selectedDis[0].section}</h3>
          <h3>{selectedDis[0].description}</h3>
          <h3>{selectedDis[0].maintenance_comment}</h3>
          <h3>{selectedDis[0].image}</h3>
        </div>
        <div className="maintenance_comment">
          <input
            className="form"
            type="text"
            name="maintenance_comment"
            placeholder="Maintenance Comment"
            value={maintenance_comment}
            onChange={handleDiscrepancyChange}
          />
          <button
            className="maintenance-comment"
            onClick={() =>
              addMaintenanceComment(selectedDis[0]._id, selectedDis[0].aircraft)
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details
