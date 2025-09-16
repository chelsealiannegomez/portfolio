import React, { useState } from 'react'
import './App.css'
import Hero from './components/hero'
import Timeline from './components/timeline'
import Projects from './components/projects'
import Contact from './components/contact'
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
      <Contact />
    </div>
  )
}

export default App
