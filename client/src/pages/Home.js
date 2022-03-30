import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Home = (props) => {
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
          <Link to={`/list_in_section/${props.aircraftIds[0]}`}>
            <button>EC130</button>
          </Link>
          <button>H300</button>
          <button>BK117</button>
        </div>
      </div>
      <div className="search-section">
        <input
          className="form"
          type="text"
          name="search"
          placeholder="Search"
          value={props.searchQuery}
          onChange={props.handleSearchChange}
        />
        <button onClick={() => console.log('Searched')}>Search</button>
      </div>
    </div>
  )
}

export default Home
