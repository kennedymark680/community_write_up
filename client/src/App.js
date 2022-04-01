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
  const [aircraftArray, setAircraftArray] = useState([])
  const [search, setSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchBarResults, setSearchBarResults] = useState([])
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
    await axios.post('/post', {
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

  useEffect(() => {
    getAircraftId()
  }, [])

  const getAircraftId = async () => {
    const res = await axios.get(`/aircraftIds`)
    setAircraftArray(res.data)
    // console.log(aircraftArray[0]._id)
  }

  const getDiscrep = async (aircraftId) => {
    const res = await axios.get(`/list_in_section/${aircraftId}`)
    console.log(res.data)
    setSearchResults(res.data)
    console.log(searchResults)
  }

  const deleteDiscrep = async (id) => {
    const res = await axios.delete(`/delete/${id}`)
    console.log(res)
    getDiscrep(aircraftIds)
  }

  const updateDiscrep = async (id) => {
    const res = await axios.put(`/update/${id}`)
    console.log(res)
    getDiscrep(aircraftIds)
  }

  const addMaintenanceComment = async (id, acId) => {
    const res = await axios.put(`/maintenance_comment/${id}`, {
      ...formValue
    })
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
    setSearchQuery(searchQuery.value)
  }

  const getDiscrepBySearch = async (aircraft) => {
    if (searchQuery) {
      const res = await axios.get(`/api/search?tail_number=${aircraft}`)
      setSearchBarResults(res.data)
      setSearch(true)
      navigate(`/list_in_section/${aircraftIds}`)
    }
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
              setSearch={setSearch}
              value={searchQuery}
              handleSearchChange={handleSearchChange}
              aircraftArray={aircraftArray}
              getDiscrepBySearch={getDiscrepBySearch}
              aircraftIds={aircraftIds}
              // onSubmit={getSearchResults}
            />
          }
        />
        <Route
          path="/List_in_Section/:id"
          element={
            <ListInSection
              search={search}
              searchResults={search ? searchBarResults : searchResults}
              getDiscrep={getDiscrep}
              deleteDiscrep={deleteDiscrep}
              updateDiscrep={updateDiscrep}
              setSearch={setSearch}
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
