import { Link } from 'react-router-dom'

function Facto() {
  return (
    <div className="container">
      {/* App Header */}
      <div className="app-header">
        <div className="app-icon-large">📊</div>
        <h1 className="app-title">Facto</h1>
        <p className="app-tagline">Productivity Made Simple</p>
        
        <div className="download-buttons">
          <a href="#" className="download-btn">
            <span>📱</span>
            <span>Download on the App Store</span>
          </a>
          <a href="#" className="download-btn">
            <span>🤖</span>
            <span>Get it on Google Play</span>
          </a>
        </div>
      </div>

      {/* App Description */}
      <section className="section">
        <h2 className="section-title">About Facto</h2>
        <p className="section-subtitle">
          Facto is your ultimate productivity companion, designed to help you organize your tasks, 
          track your progress, and accomplish your goals with ease. Whether you're managing personal 
          projects or professional workflows, Facto provides the tools you need to stay focused and productive.
        </p>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">✅</div>
            <h3>Task Management</h3>
            <p>Create, organize, and prioritize your tasks with an intuitive interface that makes productivity effortless.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📈</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your achievements and stay motivated with visual progress indicators and statistics.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Enjoy a clean, modern interface that's both aesthetically pleasing and highly functional.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔔</div>
            <h3>Smart Reminders</h3>
            <p>Never miss a deadline with intelligent notifications that keep you on track.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">☁️</div>
            <h3>Cloud Sync</h3>
            <p>Access your tasks from anywhere with seamless cloud synchronization across all your devices.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌙</div>
            <h3>Dark Mode</h3>
            <p>Reduce eye strain and work comfortably in any lighting condition with our elegant dark mode.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <h2 className="section-title">How It Works</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">1️⃣</div>
            <h3>Create Your Tasks</h3>
            <p>
              Quickly add tasks with just a few taps. Organize them into projects, 
              set priorities, and add detailed descriptions.
            </p>
          </div>
          <div className="project-card">
            <div className="project-icon">2️⃣</div>
            <h3>Stay Organized</h3>
            <p>
              Use categories, tags, and filters to keep everything organized. 
              View your tasks in multiple layouts to suit your workflow.
            </p>
          </div>
          <div className="project-card">
            <div className="project-icon">3️⃣</div>
            <h3>Accomplish More</h3>
            <p>
              Track your progress, celebrate your achievements, and build productive 
              habits that help you reach your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Section (Placeholder) */}
      <section className="section">
        <h2 className="section-title">Screenshots</h2>
        <p className="section-subtitle">
          Get a glimpse of Facto's beautiful and intuitive interface.
        </p>
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'var(--bg-light)', borderRadius: '1rem', marginTop: '2rem' }}>
          <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>
            📱 Screenshots coming soon! The app is currently in development.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="section">
        <h2 className="section-title">Requirements</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>iOS</h3>
            <p>
              <strong>Requires:</strong> iOS 14.0 or later<br />
              <strong>Compatible with:</strong> iPhone, iPad, and iPod touch
            </p>
          </div>
          <div className="project-card">
            <h3>Android</h3>
            <p>
              <strong>Requires:</strong> Android 8.0 or later<br />
              <strong>Compatible with:</strong> Most Android smartphones and tablets
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section">
        <h2 className="section-title">Need Help?</h2>
        <p className="section-subtitle">
          We're here to help! If you have any questions, feedback, or need support, 
          please don't hesitate to reach out to us at{' '}
          <a href="mailto:support@fact-app.com" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600 }}>
            support@fact-app.com
          </a>
        </p>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
            Before using Facto, please review our policies:
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy" className="cta-button" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="cta-button" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Facto

