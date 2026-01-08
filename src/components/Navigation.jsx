import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const isHome = location.pathname === '/'

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`nav ${isScrolled ? 'nav--scrolled' : ''} ${isMobileMenuOpen ? 'nav--menu-open' : ''}`}>
      <div className="container">
        <nav className="nav__inner">
          <Link to="/" className="nav__logo">
            <span className="nav__logo-text">Facto</span>
          </Link>

          {/* Desktop Actions */}
          <div className="nav__actions nav__actions--desktop">
            {isHome && (
              <a 
                href="https://apps.apple.com/app/id6755008918" 
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

          {/* Mobile Menu Button */}
          <button 
            className={`nav__mobile-toggle ${isMobileMenuOpen ? 'nav__mobile-toggle--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="nav__mobile-toggle-bar"></span>
            <span className="nav__mobile-toggle-bar"></span>
            <span className="nav__mobile-toggle-bar"></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`nav__mobile-menu ${isMobileMenuOpen ? 'nav__mobile-menu--open' : ''}`}>
        <div className="nav__mobile-menu-content">
          <nav className="nav__mobile-links">
            <Link to="/" className="nav__mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/privacy-policy" className="nav__mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="nav__mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
              Terms & Conditions
            </Link>
          </nav>
          
          <div className="nav__mobile-cta">
            <a 
              href="https://apps.apple.com/app/id6755008918" 
              target="_blank" 
              rel="noopener noreferrer"
              className="app-store-btn app-store-btn--mobile"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="app-store-btn__text">
                <span>Download on the</span>
                <span>App Store</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
