import React from 'react'
import LaunchCommander from './components/LaunchCommander'

export default function App() {
  return (
    <div className="app-root">
      <div className="nebula" />
      <div className="stars" />
      <header className="app-header">Artemis Orbital Launch Dashboard</header>
      <main>
        <LaunchCommander />
      </main>
      <footer className="app-footer">AeroSpace-X Mission Control UI demo</footer>
    </div>
  )
}
