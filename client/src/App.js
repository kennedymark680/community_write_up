import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import ListInSection from './pages/List_in_Section'
import DiscrepancyForm from './pages/Discrepancy_Form'
import axios from 'axios'

function App() {
  const aircraftIds = ['62431656a7fb4be52a53a850']
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [formValue, setFormValue] = useState({
    title: '',
    date: '',
    aircraft: '',
    description: '',
    open: '',
    section: '',
    image: ''
  })

  const submitNewDiscrep = async (id) => {
    await axios.post('http://localhost:3001/post', {
      ...formValue,
      aircraft: id
    })
    console.log('test')
  }

  const getDiscrep = async (aircraftId) => {
    const res = await axios.get(
      `http://localhost:3001/list_in_section/${aircraftId}`
    )
    console.log(res.data)
    setSearchResults(res.data)
  }

  const deleteDiscrep = async (id) => {
    const res = await axios.delete(`http://localhost:3001/delete/${id}`)
    console.log(res)
  }

  const updateDiscrep = async () => {
    const res = await axios.delete('http://localhost:3001/test')
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
    return setSearchQuery(searchQuery.value)
  }

  const { title, date, aircraft, description, open, section, image } = formValue

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
            />
          }
        />
        <Route path="/Details/" />
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
