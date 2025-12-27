import { useEffect, useRef, useState } from 'react'
import './Home.css'

function Home() {
  const screenshotsRef = useRef(null)
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in-section').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Update scroll button states
  const updateScrollButtons = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const track = trackRef.current
    if (track) {
      track.addEventListener('scroll', updateScrollButtons)
      updateScrollButtons()
      // Force a clean initial position; some browsers may auto-snap on load.
      const raf = requestAnimationFrame(() => {
        track.scrollTo({ left: 0, behavior: 'auto' })
        updateScrollButtons()
      })
      
      // Update on resize
      window.addEventListener('resize', updateScrollButtons)
      
      return () => {
        track.removeEventListener('scroll', updateScrollButtons)
        window.removeEventListener('resize', updateScrollButtons)
        cancelAnimationFrame(raf)
      }
    }
  }, [])

  // Scroll carousel left/right
  const scrollCarousel = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 300
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Mouse drag functionality for desktop
  const handleMouseDown = (e) => {
    if (!trackRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
    trackRef.current.style.cursor = 'grabbing'
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // Scroll speed multiplier
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      if (trackRef.current) {
        trackRef.current.style.cursor = 'grab'
      }
    }
  }

  const categories = [
    { name: 'Science', icon: '🔬' },
    { name: 'History', icon: '📜' },
    { name: 'Technology', icon: '💻' },
    { name: 'Psychology', icon: '🧠' },
    { name: 'Astronomy', icon: '🌌' },
    { name: 'Art & Culture', icon: '🎨' },
    { name: 'Geography', icon: '🌍' },
    { name: 'Biology', icon: '🧬' },
    { name: 'Physics', icon: '⚛️' },
    { name: 'Music', icon: '🎵' },
    { name: 'Cinema', icon: '🎬' },
    { name: 'Travel', icon: '✈️' },
  ]

  const features = [
    {
      title: 'Swipe to Discover',
      description: 'One fact at a time. No endless feeds, no distractions—just calm, focused learning.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8l4 4-4 4M7 8l-4 4 4 4M14 4l-4 16" />
        </svg>
      )
    },
    {
      title: 'Save Your Favorites',
      description: 'Double-tap to save facts that spark your curiosity. Organized automatically by category.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
      )
    },
    {
      title: 'Daily Reminders',
      description: 'Optional "Did You Know?" notifications bring a moment of curiosity to your day.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      )
    },
    {
      title: 'Works Offline',
      description: 'Facts are cached locally. Learn anywhere, anytime—no internet required.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      )
    },
  ]

  const screenshots = [
    {
      src: '/screenshots/image1.jpg',
      title: 'Choose what you want to learn',
      alt: 'Facto app categories selection screen'
    },
    {
      src: '/screenshots/image2.jpg',
      title: 'Beautiful backgrounds. Practice any language.',
      alt: 'Facto app fact display with translation'
    },
    {
      src: '/screenshots/image3.jpg',
      title: 'Keep the facts you love',
      alt: 'Facto app collections screen'
    },
    {
      src: '/screenshots/image4.jpg',
      title: 'Enjoy calming lofi',
      alt: 'Facto app with background music player'
    },
    {
      src: '/screenshots/image5.jpg',
      title: 'A daily dose of knowledge',
      alt: 'Facto app daily fact screen'
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background"></div>
        <div className="container">
          <div className="hero__content">
            <p className="hero__eyebrow animate-fade-in">Discover something new every day</p>
            <h1 className="hero__title animate-fade-in stagger-1">
              Learn interesting facts<br />
              <span className="hero__title--italic">in seconds</span>
            </h1>
            <p className="hero__subtitle animate-fade-in stagger-2">
              Facto brings you curated, fascinating facts through a calm, swipe-based experience. 
              No noise, no clutter—just pure curiosity.
            </p>
            <div className="hero__cta animate-fade-in stagger-3">
              <a 
                href="https://apps.apple.com/app/facto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="app-store-btn"
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
          
          <div className="hero__visual animate-fade-in stagger-4">
            <div className="hero-phone">
              <img 
                src="/screenshots/image1.jpg" 
                alt="Facto app categories selection" 
                className="hero-phone__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Showcase */}
      <section className="screenshots fade-in-section" ref={screenshotsRef}>
        <div className="container">
          <div className="section-header">
            <h2>See Facto in action</h2>
            <p>A beautifully designed experience that makes learning feel effortless.</p>
          </div>
          
          <div className="screenshots-carousel">
            {/* Left Arrow */}
            <button 
              className={`screenshots-nav screenshots-nav--left ${!canScrollLeft ? 'screenshots-nav--hidden' : ''}`}
              onClick={() => scrollCarousel('left')}
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <div 
              className={`screenshots-track ${isDragging ? 'screenshots-track--dragging' : ''}`}
              ref={trackRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="screenshot-item">
                  <div className="screenshot-item__image-wrapper">
                    <img 
                      src={screenshot.src} 
                      alt={screenshot.alt}
                      className="screenshot-item__image"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                  <p className="screenshot-item__caption">{screenshot.title}</p>
                </div>
              ))}
            </div>
            
            {/* Right Arrow */}
            <button 
              className={`screenshots-nav screenshots-nav--right ${!canScrollRight ? 'screenshots-nav--hidden' : ''}`}
              onClick={() => scrollCarousel('right')}
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>A calmer way to learn</h2>
            <p>No endless scrolling. No information overload. Just one thoughtful fact at a time.</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={feature.title} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-card__icon">
                  {feature.icon}
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>20+ curated categories</h2>
            <p>From the cosmos to the canvas—explore knowledge across every domain.</p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={category.name} className="category-pill" style={{ animationDelay: `${index * 0.05}s` }}>
                <span className="category-pill__icon">{category.icon}</span>
                <span className="category-pill__name">{category.name}</span>
              </div>
            ))}
            <div className="category-pill category-pill--more">
              <span className="category-pill__name">+8 more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="experience fade-in-section">
        <div className="container">
          <div className="experience__grid">
            <div className="experience__content">
              <h2>Built for calm learning</h2>
              <p className="experience__lead">
                In a world of endless feeds and notifications, Facto is different. 
                We believe learning should feel calm, not chaotic.
              </p>
              
              <ul className="experience__list">
                <li>
                  <span className="experience__check">✓</span>
                  Clean, distraction-free interface
                </li>
                <li>
                  <span className="experience__check">✓</span>
                  Optional ambient background music
                </li>
                <li>
                  <span className="experience__check">✓</span>
                  Multi-language translation support
                </li>
                <li>
                  <span className="experience__check">✓</span>
                  Dark mode for late-night reading
                </li>
              </ul>
            </div>
            
            <div className="experience__visual">
              <div className="experience-phones">
                <img 
                  src="/screenshots/image4.jpg" 
                  alt="Facto app music player" 
                  className="experience-phones__back"
                />
                <img 
                  src="/screenshots/image2.jpg" 
                  alt="Facto app with translation" 
                  className="experience-phones__front"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium vs Free */}
      <section className="pricing fade-in-section">
        <div className="container container--narrow">
          <div className="section-header">
            <h2>Start free, upgrade when ready</h2>
            <p>Explore Facto at your own pace. Premium unlocks the full experience.</p>
          </div>
          
          <div className="pricing-comparison">
            <div className="pricing-tier pricing-tier--free">
              <div className="pricing-tier__header">
                <h3>Free</h3>
                <p className="pricing-tier__price">$0</p>
              </div>
              <ul className="pricing-tier__features">
                <li>Access to select categories</li>
                <li>Daily fact limit</li>
                <li>Save your favorites</li>
                <li>Daily notifications</li>
              </ul>
            </div>
            
            <div className="pricing-tier pricing-tier--premium">
              <div className="pricing-tier__badge">Recommended</div>
              <div className="pricing-tier__header">
                <h3>Premium</h3>
                <p className="pricing-tier__price">Unlock all</p>
              </div>
              <ul className="pricing-tier__features">
                <li>All 20+ categories</li>
                <li>Unlimited facts</li>
                <li>Full personalization</li>
                <li>Priority new features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta fade-in-section">
        <div className="container container--narrow">
          <div className="final-cta__content">
            <h2>Ready to learn something new?</h2>
            <p>Download Facto and discover your first fact in seconds.</p>
            <a 
              href="https://apps.apple.com/app/facto" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="app-store-btn"
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
      </section>
    </main>
  )
}

export default Home
