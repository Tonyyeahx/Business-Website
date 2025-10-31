import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Building Innovative Digital Solutions</h1>
          <p>We create powerful mobile applications that enhance productivity and simplify everyday tasks.</p>
          <a href="#projects" className="cta-button">Explore Our Projects</a>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        {/* About Section */}
        <section className="section">
          <h2 className="section-title">Welcome to Fact App</h2>
          <p className="section-subtitle">
            We're dedicated to developing cutting-edge mobile applications that make a difference. 
            Our mission is to create intuitive, powerful tools that help people accomplish more in their daily lives.
          </p>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            Discover our innovative applications designed to enhance your digital experience.
          </p>
          
          <div className="projects-grid">
            {/* Facto Project Card */}
            <div className="project-card">
              <div className="project-icon">📊</div>
              <h3>Facto</h3>
              <p>
                A powerful productivity app designed to help you organize, track, and accomplish your goals 
                with ease. Facto combines simplicity with powerful features to streamline your workflow.
              </p>
              <Link to="/facto" className="project-link">Learn More</Link>
            </div>

            {/* Placeholder for Future Projects */}
            <div className="project-card" style={{ opacity: 0.6, border: '2px dashed var(--border-color)' }}>
              <div className="project-icon">🚀</div>
              <h3>Coming Soon</h3>
              <p>
                We're constantly innovating and developing new solutions. Stay tuned for our next exciting project 
                that will revolutionize the way you work and play.
              </p>
              <span className="project-link" style={{ color: 'var(--text-light)', cursor: 'default' }}>In Development</span>
            </div>

            {/* Placeholder for Future Projects */}
            <div className="project-card" style={{ opacity: 0.6, border: '2px dashed var(--border-color)' }}>
              <div className="project-icon">💡</div>
              <h3>More to Come</h3>
              <p>
                Innovation never stops. We have exciting ideas in the pipeline that will bring new capabilities 
                and experiences to our users.
              </p>
              <span className="project-link" style={{ color: 'var(--text-light)', cursor: 'default' }}>Planning Phase</span>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section">
          <h2 className="section-title">Why Choose Our Apps?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>User-Focused Design</h3>
              <p>Every feature is crafted with the user in mind, ensuring intuitive and delightful experiences.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Privacy First</h3>
              <p>Your data security and privacy are our top priorities. We follow industry best practices.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>High Performance</h3>
              <p>Optimized for speed and efficiency, our apps deliver smooth performance on all devices.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔄</div>
              <h3>Regular Updates</h3>
              <p>We continuously improve our apps with new features, bug fixes, and performance enhancements.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions or feedback? We'd love to hear from you. Reach out to us at{' '}
            <a href="mailto:contact@fact-app.com" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600 }}>
              contact@fact-app.com
            </a>
          </p>
        </section>
      </div>
    </>
  )
}

export default Home

