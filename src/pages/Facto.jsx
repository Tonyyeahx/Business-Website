import { Link } from 'react-router-dom'

function Facto() {
  return (
    <div className="container">
      {/* App Header */}
      <div className="app-header">
        <div className="app-icon-large">💡</div>
        <h1 className="app-title">Facto</h1>
        <p className="app-tagline">Discover Fun Facts Every Day</p>
        
        <div className="download-buttons">
          <a href="#" className="download-btn">
            <span>📱</span>
            <span>Download on the App Store</span>
          </a>
        </div>
      </div>

      {/* App Description */}
      <section className="section">
        <h2 className="section-title">About Facto</h2>
        <p className="section-subtitle">
          Facto is your daily dose of knowledge and curiosity! Get fascinating fun facts delivered to your
          device every day. From science and history to nature and technology, expand your knowledge one
          interesting fact at a time. Whether you're a trivia enthusiast or just love learning new things,
          Facto makes discovering the world's wonders fun and effortless.
        </p>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">📅</div>
            <h3>Daily Fun Facts</h3>
            <p>Receive fascinating facts delivered to your device every day. Learn something new without any effort!</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>Unlimited Facts</h3>
            <p>Get as many facts as you want, every single day. No limits on how much you can learn!</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📚</div>
            <h3>Multiple Categories</h3>
            <p>Explore facts from various categories including Science, History, Nature, Technology, and more!</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔔</div>
            <h3>Push Notifications</h3>
            <p>Get notified when new facts are available. Never miss your daily dose of knowledge!</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Enjoy a clean, modern interface that makes reading facts a delightful experience.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Simple</h3>
            <p>Quick to load, easy to use. Get your facts instantly with just a tap.</p>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="section">
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">🆓</div>
            <h3>Free</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)', margin: '1rem 0' }}>$0</p>
            <ul style={{ textAlign: 'left', color: 'var(--text-light)', lineHeight: '2' }}>
              <li>✅ Unlimited facts per day</li>
              <li>✅ One category of your choice</li>
              <li>✅ Daily push notifications</li>
              <li>✅ Beautiful interface</li>
            </ul>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-light)' }}>
              Perfect for casual learners who want to explore one topic in depth.
            </p>
          </div>
          <div className="project-card" style={{ border: '2px solid var(--primary-color)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--primary-color)', color: 'white', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 'bold' }}>
              POPULAR
            </div>
            <div className="project-icon">⭐</div>
            <h3>Premium</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)', margin: '1rem 0' }}>Coming Soon</p>
            <ul style={{ textAlign: 'left', color: 'var(--text-light)', lineHeight: '2' }}>
              <li>✅ Unlimited facts per day</li>
              <li>✅ <strong>All categories available</strong></li>
              <li>✅ Daily push notifications</li>
              <li>✅ Beautiful interface</li>
              <li>✅ Ad-free experience</li>
              <li>✅ Priority support</li>
            </ul>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-light)' }}>
              For knowledge enthusiasts who want unlimited access to all topics.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <h2 className="section-title">How It Works</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">1️⃣</div>
            <h3>Download & Choose</h3>
            <p>
              Download Facto and select your favorite category. Free users pick one,
              premium users get access to all!
            </p>
          </div>
          <div className="project-card">
            <div className="project-icon">2️⃣</div>
            <h3>Receive Daily Facts</h3>
            <p>
              Get fascinating facts pushed to your device every day. Learn something
              new without lifting a finger!
            </p>
          </div>
          <div className="project-card">
            <div className="project-icon">3️⃣</div>
            <h3>Expand Your Knowledge</h3>
            <p>
              Read unlimited facts daily, share with friends, and become a trivia master.
              Learning has never been this fun!
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

