import { useState, useRef, useEffect } from 'react'
import './BackgroundMusic.css'

const MUSIC_TRACKS = [
  '/music/Midnight Pages-1.mp3',
  '/music/Midnight Pages-2.mp3',
  '/music/Midnight Pages-3.mp3',
  '/music/Midnight Pages-4.mp3',
]

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.2)
  const [showControls, setShowControls] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const audioRef = useRef(null)
  const hasTriedAutoPlay = useRef(false)

  // Update audio source when track changes
  useEffect(() => {
    if (audioRef.current) {
      const wasPlaying = !audioRef.current.paused
      audioRef.current.src = MUSIC_TRACKS[currentTrack]
      audioRef.current.load()
      
      // Handle play state
      if (wasPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Auto-play was prevented:', error)
          setIsPlaying(false)
        })
      } else if (!hasTriedAutoPlay.current && currentTrack === 0) {
        // Try auto-play on initial load (first track only)
        hasTriedAutoPlay.current = true
        const timer = setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.play().catch(error => {
              // Auto-play was prevented by browser - this is expected behavior
              console.log('Auto-play prevented by browser:', error)
            })
          }
        }, 500)
        
        return () => clearTimeout(timer)
      }
    }
  }, [currentTrack])

  // Sync isPlaying state with audio element
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [])

  // Set volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  // Pause music when user switches to another tab/website
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Handle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(error => {
          console.log('Auto-play was prevented:', error)
          // User interaction is required for some browsers
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle audio ended event - play next track
  const handleEnded = () => {
    const nextTrack = (currentTrack + 1) % MUSIC_TRACKS.length
    setCurrentTrack(nextTrack)
  }

  // Handle next track
  const handleNextTrack = () => {
    const nextTrack = (currentTrack + 1) % MUSIC_TRACKS.length
    setCurrentTrack(nextTrack)
  }

  // Handle previous track
  const handlePreviousTrack = () => {
    const prevTrack = (currentTrack - 1 + MUSIC_TRACKS.length) % MUSIC_TRACKS.length
    setCurrentTrack(prevTrack)
  }

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  return (
    <div className={`background-music ${showControls ? 'background-music--expanded' : ''}`}>
      <audio
        ref={audioRef}
        onEnded={handleEnded}
        preload="auto"
      >
        Your browser does not support the audio element.
      </audio>

      <div className="background-music__controls">
        {showControls && (
          <button
            className="background-music__nav-button"
            onClick={handlePreviousTrack}
            aria-label="Previous track"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="19 20 9 12 19 4 19 20"></polygon>
              <line x1="5" y1="19" x2="5" y2="5"></line>
            </svg>
          </button>
        )}

        <button
          className="background-music__toggle"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>

        {showControls && (
          <button
            className="background-music__nav-button"
            onClick={handleNextTrack}
            aria-label="Next track"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
          </button>
        )}

        {showControls && (
          <div className="background-music__track-info">
            <span className="background-music__track-number">{currentTrack + 1}/{MUSIC_TRACKS.length}</span>
          </div>
        )}

        {showControls && (
          <div className="background-music__volume-control">
            <label htmlFor="volume-slider" className="background-music__volume-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            </label>
            <input
              id="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="background-music__volume-slider"
              aria-label="Volume control"
            />
          </div>
        )}

        <button
          className="background-music__settings"
          onClick={() => setShowControls(!showControls)}
          aria-label="Toggle music controls"
        >
          {showControls ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default BackgroundMusic

