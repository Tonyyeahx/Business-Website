import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Facto</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
            Building innovative digital solutions that make a difference in people's lives.
          </p>
        </div>
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><Link to="/facto">Facto</Link></li>
            <li><Link to="/#projects">All Projects</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:contact@fact-app.com">contact@fact-app.com</a></li>
            <li><a href="mailto:support@fact-app.com">support@fact-app.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Facto. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

