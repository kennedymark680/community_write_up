import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import ListInSection from './pages/List_in_Section'
import DiscrepancyForm from './pages/Discrepancy_Form'
import Details from './pages/Details'
import axios from 'axios'

function App() {
  const navigate = useNavigate()
  const aircraftIds = ['62431656a7fb4be52a53a850']
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [formValue, setFormValue] = useState({
    title: '',
    date: '',
    description: '',
    open: '',
    section: '',
    image: '',
    aircraft: '',
    maintenance_comment: ''
  })

  const submitNewDiscrep = async (id) => {
    await axios.post('http://localhost:3001/post', {
      ...formValue,
      aircraft: id
    })
    setFormValue({
      title: '',
      date: '',
      description: '',
      open: '',
      section: '',
      image: '',
      aircraft: '',
      maintenance_comment: ''
    })
    console.log('Submitted')
  }

  const getDiscrep = async (aircraftId) => {
    const res = await axios.get(
      `http://localhost:3001/list_in_section/${aircraftId}`
    )
    console.log(res.data)
    setSearchResults(res.data)
    console.log(searchResults)
  }

  const deleteDiscrep = async (id) => {
    const res = await axios.delete(`http://localhost:3001/delete/${id}`)
    console.log(res)
    getDiscrep(aircraftIds)
  }

  const updateDiscrep = async (id) => {
    const res = await axios.put(`http://localhost:3001/update/${id}`)
    console.log(res)
    getDiscrep(aircraftIds)
  }

  const addMaintenanceComment = async (id, acId) => {
    const res = await axios.put(
      `http://localhost:3001/maintenance_comment/${id}`,
      {
        ...formValue
      }
    )
    setFormValue({ ...formValue, maintenance_comment: '' })
    getDiscrep(acId)
    console.log(res)
  }

  const handleDiscrepancyChange = (e) => {
    const { name, value } = e.target
    const newValue = (prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    }

    setFormValue(newValue)
  }

  const handleSearchChange = (e) => {
    const searchQuery = e.target
    console.log(searchQuery.value)
    setSearchQuery(searchQuery.value)
  }

  const getDiscrepBySearch = async (aircraft) => {
    const res = await axios.put(
      `http://localhost:3001/search?aircraft=${aircraft}`
    )
  }

  const {
    title,
    date,
    aircraft,
    description,
    open,
    section,
    image,
    maintenance_comment
  } = formValue

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              value={searchQuery}
              handleSearchChange={handleSearchChange}
              aircraftIds={aircraftIds}
              // onSubmit={getSearchResults}
            />
          }
        />
        <Route
          path="/List_in_Section/:id"
          element={
            <ListInSection
              searchResults={searchResults}
              getDiscrep={getDiscrep}
              deleteDiscrep={deleteDiscrep}
              updateDiscrep={updateDiscrep}
            />
          }
        />
        <Route
          path="/Details/:id"
          element={
            <Details
              searchResults={searchResults}
              maintenance_comment={maintenance_comment}
              handleDiscrepancyChange={handleDiscrepancyChange}
              addMaintenanceComment={addMaintenanceComment}
            />
          }
        />
        <Route
          path="/Discrepancy/:id"
          element={
            <DiscrepancyForm
              title={title}
              date={date}
              aircraft={aircraft}
              description={description}
              open={open}
              section={section}
              image={image}
              formValue={formValue}
              handleDiscrepancyChange={handleDiscrepancyChange}
              submitNewDiscrep={submitNewDiscrep}
              getDiscrep={getDiscrep}
              deleteDiscrep={deleteDiscrep}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
