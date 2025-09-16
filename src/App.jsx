import React, { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Fun from './components/Fun'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleVideoLoaded = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  return (
    <div>
      {isLoading && <LoadingScreen />}
      <Hero onVideoLoaded={handleVideoLoaded} />
      <Timeline />
      <Projects />
      <Fun />
      <Contact />
    </div>
  )
}

export default App
