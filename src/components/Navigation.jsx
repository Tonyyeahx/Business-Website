import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <header className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
      <div className="container">
        <nav className="nav__inner">
          <Link to="/" className="nav__logo">
            <span className="nav__logo-text">Facto</span>
          </Link>

          <div className="nav__actions">
            {isHome && (
              <a 
                href="https://apps.apple.com/app/facto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn--primary btn--nav"
              >
                Download
              </a>
            )}
            {!isHome && (
              <Link to="/" className="btn btn--ghost">
                ← Back to Home
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
