import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      <nav></nav>
      <img src="https://i.ibb.co/ry4zLrq/ec130.png" alt="ec130" border="0" />
      <input
        className="form"
        type="text"
        name="search"
        placeholder="Search"
        value={props.searchQuery}
        onChange={props.handleSearchChange}
      />
      <button onClick={() => console.log('Searched')}>Search</button>
      <Link to={`/list_in_section/${props.aircraftIds[0]}`}>
        <button>EC130</button>
      </Link>
    </div>
  )
}

export default Home
