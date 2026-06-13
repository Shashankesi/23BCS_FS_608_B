import React from 'react'

export default function CircularGauge({ value = 100, size = 100, stroke = 10 }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <svg width={size} height={size} className="circular-gauge">
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c2ff" />
          <stop offset="100%" stopColor="#7effa1" />
        </linearGradient>
      </defs>
      <g transform={`translate(${size / 2}, ${size / 2})`}>
        <circle r={radius} fill="transparent" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
        <circle
          r={radius}
          fill="transparent"
          stroke="url(#g1)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90)"
        />
        <text x="0" y="6" textAnchor="middle" fontSize="16" fill="#e6eef8">
          {Math.round(value)}%
        </text>
      </g>
    </svg>
  )
}
