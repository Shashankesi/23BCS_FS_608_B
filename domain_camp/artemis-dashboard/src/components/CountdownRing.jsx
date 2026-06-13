import React, { useMemo } from 'react'

export default function CountdownRing({ total = 10, remaining = 10, size = 80, stroke = 8 }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.max(0, Math.min(1, (total - remaining) / total))
  const offset = circumference - progress * circumference

  return (
    <svg width={size} height={size} className="countdown-ring">
      <g transform={`translate(${size / 2}, ${size / 2})`}>
        <circle r={radius} fill="transparent" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
        <circle
          r={radius}
          fill="transparent"
          stroke="#7fffd4"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90)"
        />
        <text x="0" y="6" textAnchor="middle" fontSize="14" fill="#e6eef8">
          {remaining}s
        </text>
      </g>
    </svg>
  )
}
