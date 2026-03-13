import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Project = lazy(() => import('./pages/Project'))
const More = lazy(() => import('./pages/More'))

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="logo">Exp7</h1>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/project">Project</Link></li>
              <li><Link to="/more">More</Link></li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Suspense fallback={<div className="loading">Loading page...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
              <Route path="/more" element={<More />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="footer">
          <p>&copy; 2026 Lazy Loading Demo. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
