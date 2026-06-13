import React from 'react'

const sample = [
  'T-60: Fueling started',
  'T-45: Avionics check OK',
  'T-30: Engine purge complete',
  'T-20: Comm link established',
  'T-10: Final go/no-go' 
]

export default function MissionLogs() {
  return (
    <div className="mission-logs">
      {sample.map((l, i) => (
        <div key={i} className="log-line">{l}</div>
      ))}
    </div>
  )
}
