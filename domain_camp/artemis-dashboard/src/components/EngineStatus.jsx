import React from 'react'

export default function EngineStatus({ engines = [true, true, true, true], temps = [520, 540, 510, 525] }) {
  return (
    <div className="engine-status">
      {engines.map((on, i) => (
        <div key={i} className="engine">
          <div className={`engine-indicator ${on ? 'on' : 'off'}`}></div>
          <div className="engine-meta">
            <div className="engine-label">Engine {i + 1}</div>
            <div className="engine-temp">{temps[i]} °C</div>
            <div className="engine-health">
              <div className="health-bar" style={{ width: `${Math.max(30, 100 - (temps[i] - 400) / 2)}%` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
