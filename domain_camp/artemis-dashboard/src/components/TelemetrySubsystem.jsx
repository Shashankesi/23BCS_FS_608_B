import React from 'react'

export default function TelemetrySubsystem({ fuelLevel, onAbortSequence }) {
  return (
    <div className="telemetry">
      <p>
        <strong>Fuel Level:</strong> {fuelLevel}%
      </p>

      {/* Inline logical AND used for conditional warning per requirement */}
      {fuelLevel < 20 && (
        <p className="warning">CRITICAL FUEL: Initiate procedures immediately!</p>
      )}

      <button className="btn abort-manual" onClick={onAbortSequence}>
        Manual Abort
      </button>
    </div>
  )
}
