import React from 'react'

const steps = [
  'Fuel Loading',
  'Engine Check',
  'Navigation Check',
  'Communication Check',
  'Ignition',
  'Liftoff'
]

export default function MissionTimeline({ current = 0 }) {
  return (
    <div className="timeline">
      {steps.map((s, i) => (
        <div key={s} className={`timeline-step ${i <= current ? 'done' : ''}`}>
          <div className="dot">{i <= current ? '✓' : i + 1}</div>
          <div className="label">{s}</div>
        </div>
      ))}
    </div>
  )
}
