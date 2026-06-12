/**
 * ProgressBar Component
 * Displays visual progress of task completion with percentage
 */
export default function ProgressBar({ completed, total, percentage }) {
  return (
    <div className="progress-section">
      <div className="progress-header">
        <span className="progress-label">Progress</span>
        <span className="progress-percentage">{Math.round(percentage)}%</span>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        >
          <div className="progress-light"></div>
        </div>
      </div>
      <div className="progress-info">
        <span>{completed} of {total} tasks completed</span>
      </div>
    </div>
  )
}
