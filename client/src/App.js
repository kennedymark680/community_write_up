import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/List_in_Section" />
        <Route path="/Details" />
        <Route path="/Discrepancy" />
      </Routes>
    </div>
  )
}

export default App
