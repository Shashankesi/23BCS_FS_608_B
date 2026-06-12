import { useState, useEffect } from 'react'
import TodoApp from './components/TodoApp'
import './styles/App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check localStorage for dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedDarkMode)
    if (savedDarkMode) {
      document.body.classList.add('dark-mode')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode)
    
    if (newMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }

  return (
    <div className="app-container">
      <TodoApp darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App
