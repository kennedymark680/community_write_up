import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import ListInSection from './pages/List_in_Section'
import DiscrepancyForm from './pages/Discrepancy_Form'
import axios from 'axios'

function App() {
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

  const submitNewDiscrep = async () => {
    await axios.post('http://localhost:3001/post', formValue)
    console.log('test')
  }

  const getDiscrep = async () => {
    const res = await axios.get('http://localhost:3001/test')
    setSearchResults(res.data)
  }

  const deleteDiscrep = async () => {
    const res = await axios.delete(
      'http://localhost:3001/delete/62424aa1b14d681f749ce62f'
    )
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
              // onSubmit={getSearchResults}
            />
          }
        />
        <Route
          path="/List_in_Section"
          element={<ListInSection searchResults={searchResults} />}
        />
        <Route path="/Details" />
        <Route
          path="/Discrepancy"
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
