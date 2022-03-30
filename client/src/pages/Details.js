import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = ({ searchResults }) => {
  let { id } = useParams()
  console.log(searchResults)

  // useEffect()

  let selectedDis = searchResults.filter((dis) => id === dis._id)
  console.log(selectedDis[0].title)
  return (
    <div>
      <Nav />
      <img src={`${selectedDis[0].image}`} alt="discrepancy" />
      <h1>{selectedDis[0].title}</h1>
      <h3>{selectedDis[0].date}</h3>
      <h3>{selectedDis[0].description}</h3>
    </div>
  )
}

export default Details
