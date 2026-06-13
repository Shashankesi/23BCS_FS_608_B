import React from 'react'

export default function DashboardPanel({ title, children }) {
  return (
    <section className="panel panel-animate">
      <h2 className="panel-title">{title}</h2>
      <div className="panel-body">{children}</div>
    </section>
  )
}
