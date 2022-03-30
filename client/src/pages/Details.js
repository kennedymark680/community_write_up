import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AircraftBanner from '../components/AircraftBanner'

const Details = ({ searchResults }) => {
  let { id } = useParams()
  console.log(searchResults)

  // useEffect()

  let selectedDis = searchResults.filter((dis) => id === dis._id)
  console.log(selectedDis[0].title)
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
          <h3>{selectedDis[0].aircraftModel}</h3>
          <h3>{selectedDis[0].section}</h3>
          <h3>{selectedDis[0].description}</h3>
        </div>
      </div>
    </div>
  )
}

export default Details
