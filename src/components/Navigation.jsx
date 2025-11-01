import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">Facto</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/facto">Facto</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

