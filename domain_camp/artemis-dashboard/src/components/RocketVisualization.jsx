import React, { useEffect, useRef } from 'react'

export default function RocketVisualization({ countdown, fuelLevel, isAborted, launched }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.clientWidth)
    let h = (canvas.height = canvas.clientHeight)
    let particles = []
    let raf

    function resize() {
      w = canvas.width = canvas.clientWidth
      h = canvas.height = canvas.clientHeight
    }
    window.addEventListener('resize', resize)

    function addParticle(x, y, vx, vy, life, size, color) {
      particles.push({ x, y, vx, vy, life, size, color, age: 0 })
    }

    function emit() {
      const baseX = w / 2
      const baseY = h * 0.75
      // Pre-launch small smoke, countdown increases intensity
      const intensity = launched ? 12 : Math.max(2, 12 - countdown)
      for (let i = 0; i < intensity; i++) {
        const vx = (Math.random() - 0.5) * 1.2
        const vy = -Math.random() * (launched ? 3.5 : 1.2) - 0.4
        const life = 60 + Math.random() * 40
        const size = 6 + Math.random() * 8
        const color = launched ? 'rgba(255,150,50,0.9)' : 'rgba(200,200,210,0.08)'
        addParticle(baseX + (Math.random() - 0.5) * 30, baseY + (Math.random() * 6), vx, vy, life, size, color)
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h)
      // draw subtle glow under rocket
      const grad = ctx.createRadialGradient(w / 2, h * 0.78, 10, w / 2, h * 0.78, 120)
      grad.addColorStop(0, launched ? 'rgba(255,160,60,0.35)' : 'rgba(60,120,200,0.08)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, h * 0.6, w, h * 0.4)

      // emit particles
      emit()

      // update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy -= 0.02 // rise faster
        p.age++
        const t = p.age / p.life
        if (p.age > p.life) particles.splice(i, 1)
        ctx.globalCompositeOperation = 'lighter'
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y - t * 30, p.size * (1 - t * 0.9), 0, Math.PI * 2)
        ctx.fill()
      }

      // draw simple rocket SVG via shapes
      // rocket body
      ctx.globalCompositeOperation = 'source-over'
      ctx.save()
      ctx.translate(w / 2, h * 0.6)
      // shadow under pad
      ctx.fillStyle = 'rgba(0,0,0,0.4)'
      ctx.fillRect(-60, 70, 120, 12)

      // rocket body
      ctx.fillStyle = '#e9eef5'
      ctx.beginPath()
      ctx.moveTo(0, -120)
      ctx.quadraticCurveTo(22, -90, 18, -30)
      ctx.lineTo(18, 70)
      ctx.lineTo(-18, 70)
      ctx.lineTo(-18, -30)
      ctx.quadraticCurveTo(-22, -90, 0, -120)
      ctx.fill()

      // nose cone
      ctx.fillStyle = '#cfe7ff'
      ctx.beginPath()
      ctx.moveTo(0, -120)
      ctx.lineTo(14, -96)
      ctx.lineTo(-14, -96)
      ctx.closePath()
      ctx.fill()

      // accents / windows
      ctx.fillStyle = '#0f1724'
      ctx.beginPath()
      ctx.arc(0, -20, 8, 0, Math.PI * 2)
      ctx.fill()

      // engine glow during countdown and launch
      if (!isAborted) {
        const glow = launched ? Math.min(1, 0.2 + (100 - fuelLevel) / 100) : 0.15 + (10 - Math.max(0, countdown)) * 0.06
        const g = ctx.createRadialGradient(0, 82, 4, 0, 82, 60)
        g.addColorStop(0, `rgba(255,180,60,${glow})`)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.ellipse(0, 82, 40, 20, 0, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()

      raf = requestAnimationFrame(step)
    }

    step()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [countdown, fuelLevel, isAborted, launched])

  return (
    <div className="rocket-panel">
      <canvas ref={canvasRef} className="rocket-canvas" />
      <svg className={`rocket-svg ${launched ? 'launched' : ''} ${isAborted ? 'aborted' : ''}`} viewBox="0 0 120 220" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(60,110)">
          <ellipse cx="0" cy="90" rx="30" ry="8" fill="rgba(0,0,0,0.35)"/>
          <path className="rocket-body" d="M0,-110 C18,-80 16,-30 16,32 L16,80 L-16,80 L-16,32 C-16,-30 -18,-80 0,-110 Z" fill="#e9eef5" stroke="#d2e6ff" strokeWidth="1"/>
          <polygon className="nose" points="0,-110 12,-92 -12,-92" fill="#cfe7ff"/>
          <circle cx="0" cy="-18" r="6" fill="#0f1724"/>
        </g>
      </svg>
    </div>
  )
}
