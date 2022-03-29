import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <div>
      <Link to={`/`}>
          <button>Home</button>
      </Link>
    </div>
  )
}

export default Nav