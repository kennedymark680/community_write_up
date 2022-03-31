import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Home = (props) => {
  useEffect(() => {
    props.setSearch(false)
  }, [])
  return (
    <div className="home-page">
      <Nav />
      <div className="home-body">
        <div className="container">
          <h1 className="typed-out">Community Write-Up</h1>
        </div>

        <img
          src="https://i.ibb.co/X8097DF/ec130.png"
          alt="ec130"
          border="0"
          className="helicopter"
        />
        <img
          src="https://i.ibb.co/mGCdjBc/shadow.png"
          alt="shadow"
          border="0"
          className="shadow"
        />
        <div className="aircraft-buttons">
          <Link to={`/list_in_section/${props.aircraftArray}`}>
            <button>EC130</button>
          </Link>
          <button>H300</button>
          <button>BK117</button>
        </div>
        <div className="search-section">
          <input
            className="form"
            type="text"
            name="search"
            placeholder="Tail Number"
            value={props.searchQuery}
            onChange={props.handleSearchChange}
          />

          <button onClick={() => props.getDiscrepBySearch(props.value)}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
