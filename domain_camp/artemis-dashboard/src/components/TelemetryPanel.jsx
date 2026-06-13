import React from 'react'
import CircularGauge from './CircularGauge'
import EngineStatus from './EngineStatus'
import RadarHUD from './RadarHUD'

export default function TelemetryPanel({ fuelLevel }) {
  return (
    <div className="telemetry-panel">
      <div className="telemetry-top">
        <CircularGauge value={fuelLevel} size={140} stroke={12} />
        <div className="comm-status">
          <div className="signal">Signal: <strong>●●●●●</strong></div>
          <div className="sat">Sat link: <strong>Active</strong></div>
        </div>
      </div>

      <div className="telemetry-middle">
        <EngineStatus />
      </div>

      <div className="telemetry-bottom">
        <RadarHUD />
      </div>
    </div>
  )
}
