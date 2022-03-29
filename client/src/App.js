import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import DiscrepancyForm from './pages/Discrepancy_Form'
import axios from 'axios'

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

  const submitNewDiscrep = async () => {
    await axios.post('http://localhost:3001/post', formValue)
    console.log('test')
  }

  const getDiscrep = async () => {
    const res = await axios.get('http://localhost:3001/test')
    console.log(res.data)
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
              formValue={formValue}
              handleChange={handleChange}
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
