import React, { useEffect, useState } from 'react'
import DashboardPanel from './DashboardPanel'
import TelemetrySubsystem from './TelemetrySubsystem'
import RocketVisualization from './RocketVisualization'
import MissionTimeline from './MissionTimeline'
import MissionLogs from './MissionLogs'
import TelemetryPanel from './TelemetryPanel'

export default function LaunchCommander() {
  const [countdown, setCountdown] = useState(10)
  const [fuelLevel, setFuelLevel] = useState(100)
  const [isAborted, setIsAborted] = useState(false)
  const [launched, setLaunched] = useState(false)
  const [altitude, setAltitude] = useState(0)
  const [screenShake, setScreenShake] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [now, setNow] = useState(() => new Date())

  // Start countdown and fuel consumption. Use functional updaters to avoid stale closures.
  useEffect(() => {
    if (isAborted) return

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          // mark launched if not aborted
          return 0
        }
        return prev - 1
      })

      setFuelLevel(prevFuel => {
        if (prevFuel <= 0) return 0
        return Math.max(0, prevFuel - 6) // consume fuel each second
      })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [isAborted])

  // detect liftoff when countdown reaches 0 and not aborted
  useEffect(() => {
    if (countdown === 0 && !isAborted && !launched) {
      setLaunched(true)
      // screen shake for 2.5s
      setScreenShake(true)
      setTimeout(() => setScreenShake(false), 2500)
    }
  }, [countdown, isAborted, launched])

  // altitude simulation when launched
  useEffect(() => {
    if (!launched || isAborted) return
    const altTimer = setInterval(() => {
      setAltitude(a => a + Math.max(1, Math.round(a * 0.05) + 2))
    }, 500)
    return () => clearInterval(altTimer)
  }, [launched, isAborted])

  // live clock
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  // When fuel exhausts, abort mission automatically
  useEffect(() => {
    if (fuelLevel <= 0 && !isAborted) {
      setIsAborted(true)
    }
  }, [fuelLevel, isAborted])

  const handleManualAbort = () => {
    setIsAborted(true)
  }

  const handleGlobalAbort = () => {
    setIsAborted(true)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {})
    }
  }

  return (
    <div className={`command-center ${isAborted ? 'emergency' : ''} ${screenShake ? 'screen-shake' : ''}`}>
      <aside className="left-panel">
        <DashboardPanel title="Mission Status">
          <div className="status">
            <p><strong>T-Minus:</strong> {countdown}s</p>
            {countdown === 0 && !isAborted && (<p className="liftoff">LIFTOFF — Artemis vehicle has launched!</p>)}
            {isAborted && <p className="aborted">MISSION ABORTED</p>}
            <p className="clock">{now.toLocaleString()}</p>
          </div>
        </DashboardPanel>

        <DashboardPanel title="Timeline">
          <MissionTimeline current={Math.max(0, 6 - countdown)} />
        </DashboardPanel>

        <DashboardPanel title="Mission Logs">
          <MissionLogs />
        </DashboardPanel>
      </aside>

      <main className="center-panel">
        <DashboardPanel title="Launch Stage">
          <div className="center-stage">
            <RocketVisualization countdown={countdown} fuelLevel={fuelLevel} isAborted={isAborted} launched={launched} />
            <div className="center-overlays">
              <div className="altitude-velocity">
                <div className="alt">Altitude: <strong>{altitude} m</strong></div>
                <div className="vel">Velocity: <strong>{launched ? Math.min(8000, Math.round(altitude * 0.12)) : 0} m/s</strong></div>
              </div>
            </div>
          </div>
        </DashboardPanel>

        <DashboardPanel title="Mission Control">
          <div className="control-panel">
            <div>
              <button className="btn abort-global" onClick={handleGlobalAbort}>GLOBAL ABORT</button>
              <button className="btn" onClick={toggleFullscreen}>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</button>
            </div>
            <div className="metrics">
              <p><strong>Fuel:</strong> {fuelLevel}%</p>
              <p><strong>Countdown:</strong> {countdown}s</p>
              <p><strong>State:</strong> {isAborted ? 'Aborted' : (launched ? 'In Flight' : 'Pre-launch')}</p>
            </div>
          </div>
        </DashboardPanel>
      </main>

      <aside className="right-panel">
        <DashboardPanel title="Telemetry">
          <div className="telemetry-wrap">
            <TelemetrySubsystem fuelLevel={fuelLevel} onAbortSequence={handleManualAbort} />
            <TelemetryPanel fuelLevel={fuelLevel} />
          </div>
        </DashboardPanel>

        <DashboardPanel title="Analytics">
          <div className="analytics">
            <p>Fuel consumption and telemetry charts coming soon.</p>
          </div>
        </DashboardPanel>
      </aside>
    </div>
  )
}
