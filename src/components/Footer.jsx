import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-text">Facto</span>
            </Link>
            <p className="footer__tagline">
              Discover interesting facts, one swipe at a time.
            </p>
          </div>

          <nav className="footer__nav">
            <div className="footer__links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
              <a href="mailto:contact@facto-app.com">Contact</a>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Facto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
