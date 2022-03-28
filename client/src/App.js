import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DiscrepancyForm from './pages/Discrepancy_Form'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List_in_Section" />
        <Route path="/Details" />
        <Route path="/Discrepancy" element={<DiscrepancyForm />} />
      </Routes>
    </div>
  )
}

export default App
