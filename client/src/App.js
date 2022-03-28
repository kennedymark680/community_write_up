import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import DiscrepancyForm from './pages/Discrepancy_Form'

function App() {
  const [formValue, setFormValue] = useState({
    title: '',
    date: '',
    aircraft: '',
    description: '',
    open: '',
    section: '',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const newValue = (prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    }
    setFormValue(newValue)
  }

  const { title, date, aircraft, description, open, section, image } = formValue

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List_in_Section" />
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
              handleChange={handleChange}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
