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
    </div>
  )
}

export default Home
